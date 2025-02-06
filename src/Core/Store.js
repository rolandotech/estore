import { configureStore } from '@reduxjs/toolkit';
import EStoreData from './CounterSlice';

export const Store = configureStore({
  reducer: {
    eStoreData: EStoreData
  },
})
