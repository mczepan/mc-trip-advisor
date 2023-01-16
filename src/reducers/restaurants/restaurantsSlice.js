import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import request from 'common.js/api';

export const fetchRestaurantsInBoundary = createAsyncThunk(
  'restaurants/fetchRestaurantsInBoundary',
  async () =>
    await request.get('/restaurants/list-in-boundary', {
      params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
      },
    })
);

const initialStateRestaurants = {
  restaurants: [],
  loading: false,
  errorMessage: '',
};

export const restaurantsSlice = createSlice({
  name: 'notes',
  initialState: initialStateRestaurants,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurantsInBoundary.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchRestaurantsInBoundary.fulfilled, (state, action) => {
      state.restaurants = action.payload.data;
      state.loading = false;
    });
    builder.addCase(fetchRestaurantsInBoundary.rejected, (state, action) => {
      state.restaurants = [];
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
