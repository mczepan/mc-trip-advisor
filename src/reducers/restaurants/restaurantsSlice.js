import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import request from 'common.js/api';

export const fetchRestaurantsInBoundary = createAsyncThunk(
  'restaurants/fetchRestaurantsInBoundary',
  async () =>
    await request.get('/restaurants/list-in-boundary', {
      params: {
        bl_latitude: '53',
        tr_latitude: '53.428543',
        bl_longitude: '14',
        tr_longitude: '14.552812',
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
