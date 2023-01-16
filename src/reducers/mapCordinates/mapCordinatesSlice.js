import { createSlice } from '@reduxjs/toolkit';

const initialStateMapCordinates = {
  cordinates: {},
  bounds: {},
};

export const mapCordinates = createSlice({
  name: 'mapCordinates',
  initialState: initialStateMapCordinates,
  reducers: {
    setMapCordinates(state, action) {
      state.cordinates = { lat: action.payload.lat, lng: action.payload.lng };
    },
    setMapBounds(state, action) {
      state.bounds = { ne: action.payload.ne, sw: action.payload.sw };
    },
  },
});

export const { setMapBounds, setMapCordinates } = mapCordinates.actions;
