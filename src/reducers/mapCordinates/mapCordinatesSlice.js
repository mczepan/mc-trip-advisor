import { createSlice } from '@reduxjs/toolkit';

const initialStateMapCordinates = {
  defaultCordinates: {},
  cordinates: {},
  bounds: {},
};

export const mapCordinates = createSlice({
  name: 'mapCordinates',
  initialState: initialStateMapCordinates,
  reducers: {
    setDefaultMapCordinates(state, action) {
      state.defaultCordinates = {
        lat: action.payload.lat,
        lng: action.payload.lng,
      };
    },
    setMapCordinates(state, action) {
      state.cordinates = { lat: action.payload.lat, lng: action.payload.lng };
    },
    setMapBounds(state, action) {
      state.bounds = { ne: action.payload.ne, sw: action.payload.sw };
    },
  },
});

export const { setMapBounds, setMapCordinates, setDefaultMapCordinates } =
  mapCordinates.actions;
