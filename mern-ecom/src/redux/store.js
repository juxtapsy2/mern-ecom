import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './slides/counterSlice';

export const store = configureStore({
    reducer: counterSlice.reducer
  })
  
  // Can still subscribe to the store
  store.subscribe(() => console.log(store.getState()))
  