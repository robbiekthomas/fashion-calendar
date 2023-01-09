import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContact } = contactSlice.actions;

export default contactSlice.reducer;
