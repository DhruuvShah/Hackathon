import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    signOut 
} from 'firebase/auth';
import { auth, db } from '../../firebase/config'; // Ensure this path is correct
import { doc, setDoc } from 'firebase/firestore';

// Check local storage for user info
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userInfo: userInfoFromStorage,
  status: 'idle',
  error: null,
};

// --- LOGIN THUNK (Updated for Firebase) ---
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // We store a simplified user object in Redux and localStorage
      const simplifiedUser = { uid: user.uid, email: user.email, name: user.displayName };
      localStorage.setItem('userInfo', JSON.stringify(simplifiedUser));
      return simplifiedUser;
    } catch (error) {
      // Return a user-friendly error message from Firebase
      return rejectWithValue(error.code ? error.code.replace('auth/', '').replace(/-/g, ' ') : 'Login failed');
    }
  }
);

// --- REGISTER THUNK (Updated for Firebase) ---
export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Add user's details to the Firestore database
      await setDoc(doc(db, 'users', user.uid), { 
          name, 
          email, 
          createdAt: new Date() 
      });
      const simplifiedUser = { uid: user.uid, email: user.email, name: name };
      localStorage.setItem('userInfo', JSON.stringify(simplifiedUser));
      return simplifiedUser;
    } catch (error) {
      return rejectWithValue(error.code ? error.code.replace('auth/', '').replace(/-/g, ' ') : 'Registration failed');
    }
  }
);

// --- LOGOUT THUNK (Updated for Firebase) ---
export const logout = createAsyncThunk('auth/logout', async () => {
    await signOut(auth);
    localStorage.removeItem('userInfo');
});

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
      // Login cases
      .addCase(login.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userInfo = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Register cases
      .addCase(register.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userInfo = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Logout case
      .addCase(logout.fulfilled, (state) => {
        state.userInfo = null;
        state.status = 'idle';
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
