import { configureStore } from '@reduxjs/toolkit';
import { mapCordinates } from 'reducers/mapCordinates/mapCordinatesSlice';
import { restaurantsSlice } from 'reducers/restaurants/restaurantsSlice';

export const store = configureStore({
  reducer: {
    restaurants: restaurantsSlice.reducer,
    mapCordinates: mapCordinates.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
