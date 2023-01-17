import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import request from 'common.js/api';

export const fetchRestaurantsInBoundary = createAsyncThunk(
  'restaurants/fetchRestaurantsInBoundary',
  async ({ ne, sw }) =>
    await request.get('/restaurants/list-in-boundary', {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
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
      state.restaurants = action.payload.data.data.filter((r) => r.name);
      state.loading = false;
    });
    builder.addCase(fetchRestaurantsInBoundary.rejected, (state, action) => {
      state.restaurants = [];
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
