import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'actions',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    removeContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { filterContact } = filterSlice.actions;

export const contactReducer = contactsSlice.reducer;
export const filterReducer = filterSlice.reducer;
