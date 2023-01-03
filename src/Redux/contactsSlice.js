import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'actions',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
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
