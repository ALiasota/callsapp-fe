import { configureStore } from '@reduxjs/toolkit';

import { linksApi } from './slices/links-slice';

export const store = configureStore({
  reducer: {
    [linksApi.reducerPath]: linksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(linksApi.middleware),
});
