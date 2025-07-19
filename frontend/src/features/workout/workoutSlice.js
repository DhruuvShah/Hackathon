import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const generateWorkout = createAsyncThunk(
  'workout/generateWorkout',
  async ({ goal, duration, style }, { rejectWithValue }) => {
    const prompt = `
        You are an expert fitness coach. Create a detailed and motivating workout plan based on the following user requirements.
        The output should be in Markdown format.
        - **Primary Goal:** ${goal}
        - **Time Available:** ${duration} minutes
        - **Workout Style/Equipment:** ${style}
        Please structure the plan with sections for a catchy title, a warm-up (5-7 mins), a main workout (in a table with Exercise, Sets x Reps, and Rest columns), a cool-down (5 mins), and a concluding motivational tip.
    `;
    try {
        const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
        const payload = { contents: chatHistory };
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            const errorData = await response.json();
            return rejectWithValue(errorData.error.message || 'API Error');
        }
        const result = await response.json();
        if (result.candidates?.[0]?.content?.parts?.[0]?.text) {
            return result.candidates[0].content.parts[0].text;
        } else {
            return rejectWithValue('No content received from API.');
        }
    } catch (error) {
        return rejectWithValue(error.message);
    }
  }
);
const initialState = { plan: '', status: 'idle', error: null };
const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(generateWorkout.pending, (state) => {
        state.status = 'loading';
        state.plan = '';
        state.error = null;
      })
      .addCase(generateWorkout.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.plan = action.payload;
      })
      .addCase(generateWorkout.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});
export default workoutSlice.reducer;