import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL =
  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const fetchRestaurantsInBoundary = createAsyncThunk(
  'restaurants/fetchRestaurantsInBoundary',
  async () =>
    await axios.get(URL, {
      params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
      },
      headers: {
        'X-RapidAPI-Key': '0d8355b224msh51d66535f64ddebp1ec9d4jsn507c6a862b2f',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
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
