import { configureStore } from '@reduxjs/toolkit';
import { mapCordinates } from 'reducers/mapCordinates/mapCordinatesSlice';
import { placesSlice } from 'reducers/places/placesSlice';

export const store = configureStore({
  reducer: {
    places: placesSlice.reducer,
    mapCordinates: mapCordinates.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
