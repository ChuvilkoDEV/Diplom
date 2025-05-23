import { createSlice } from '@reduxjs/toolkit';
import { fetchInterestsThunk } from './thunk';

const interestsSlice = createSlice({
  name: 'interests',
  initialState: {
    items: [],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInterestsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInterestsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchInterestsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default interestsSlice.reducer;
