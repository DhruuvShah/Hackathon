import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { 
    signOut,
    updateProfile as firebaseUpdateProfile,
    updateEmail,
    updatePassword,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import { auth, db } from '../../firebase/config';
import { doc, setDoc, getDoc } from 'firebase/firestore';

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
        name: user.displayName 
      };
      localStorage.setItem('userInfo', JSON.stringify(simplifiedUser));
      return simplifiedUser;
    } catch (error) {
      return rejectWithValue(error.code ? error.code.replace('auth/', '').replace(/-/g, ' ') : 'Google sign-in failed');
    }
  }
);

// --- LOGOUT THUNK ---
export const logout = createAsyncThunk('auth/logout', async () => {
    await signOut(auth);
    localStorage.removeItem('userInfo');
});

// --- UPDATE PROFILE THUNK ---
export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async ({ name, email, password }, { rejectWithValue }) => {
    // ... (This function remains the same as before)
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
      clearError: (state) => {
          state.error = null;
      }
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
        state.status = 'succeeded';
        state.userInfo = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;


