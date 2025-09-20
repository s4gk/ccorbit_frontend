import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './slices/productSlice';
import filterReducer from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
