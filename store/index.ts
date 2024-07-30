import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import currencyReducer from './slices/currencySlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        currency: currencyReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
