import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'actions',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    // remove: state => {
    //   state.value -= 1;
    // },
    // filter: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { addContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
