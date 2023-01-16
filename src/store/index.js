import { configureStore } from '@reduxjs/toolkit';
import { restaurantsSlice } from 'reducers/restaurants/restaurantsSlice';

export const store = configureStore({
  reducer: { restaurants: restaurantsSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
