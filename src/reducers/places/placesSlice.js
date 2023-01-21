import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import request from 'common.js/api';

export const fetchPlacesInBoundary = createAsyncThunk(
  'places/fetchPlacesInBoundary',
  async ({ bounds: { ne, sw }, type, rating }) =>
    await request.get(`/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        ...(rating && { min_rating: rating }),
      },
    })
);

const initialStatePlaces = {
  places: [],
  activePlace: null,
  isLoading: false,
  errorMessage: '',
};

export const placesSlice = createSlice({
  name: 'notes',
  initialState: initialStatePlaces,
  reducers: {
    setActivePlace(state, action) {
      state.activePlace = state.places.find(
        ({ name }) => name === action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlacesInBoundary.pending, (state, action) => {
      state.isLoading = true;
      state.places = [];
    });
    builder.addCase(fetchPlacesInBoundary.fulfilled, (state, action) => {
      state.places = action.payload.data.data.filter((r) => r.name);
      state.isLoading = false;
    });
    builder.addCase(fetchPlacesInBoundary.rejected, (state, action) => {
      state.places = [];
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setActivePlace } = placesSlice.actions;
