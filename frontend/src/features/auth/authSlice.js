import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  signOut,
  updateProfile as firebaseUpdateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth, db } from '../../firebase/config';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';

// Get user info from localStorage if available
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userInfo: userInfoFromStorage,
  status: 'idle',
  error: null,
};

// --- SIGN IN WITH GOOGLE THUNK ---
export const signInWithGoogle = createAsyncThunk(
  'auth/signInWithGoogle',
  async (_, { rejectWithValue }) => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          name: user.displayName,
          email: user.email,
          createdAt: new Date(),
        });
      }

      const simplifiedUser = {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
      };
      localStorage.setItem('userInfo', JSON.stringify(simplifiedUser));
      return simplifiedUser;
    } catch (error) {
      return rejectWithValue(
        error.code
          ? error.code.replace('auth/', '').replace(/-/g, ' ')
          : 'Google sign-in failed'
      );
    }
  }
);

// --- LOGOUT THUNK ---
export const logout = createAsyncThunk('auth/logout', async () => {
  await signOut(auth);
  localStorage.removeItem('userInfo');
});

// --- UPDATE PROFILE THUNK (FINAL WORKING CODE) ---
export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async ({ name }, { getState, rejectWithValue }) => {
    try {
      const { userInfo } = getState().auth;
      if (!userInfo || !auth.currentUser) {
        throw new Error('No user logged in');
      }

      // 1. Update Firebase Auth display name
      await firebaseUpdateProfile(auth.currentUser, { displayName: name });

      // 2. Update Firestore user name
      const userDocRef = doc(db, 'users', userInfo.uid);
      await updateDoc(userDocRef, { name });

      // 3. Update user object and localStorage
      const updatedUser = {
        ...userInfo,
        name,
      };
      localStorage.setItem('userInfo', JSON.stringify(updatedUser));
      return updatedUser;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to update profile');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logout.fulfilled, (state) => {
        state.userInfo = null;
        state.status = 'idle';
      })
      .addCase(signInWithGoogle.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userInfo = action.payload;
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
