import { configureStore } from '@reduxjs/toolkit';
import { contactReducer, filterReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});
