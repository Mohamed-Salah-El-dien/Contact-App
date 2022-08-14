import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const contactAdapter = createEntityAdapter();
export const {
  selectAll: selectAllContcats,
  selectById: selectContactById,
  selectTotal: totalContacts,
} = contactAdapter.getSelectors((state) => state.contacts);

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactAdapter.getInitialState(),
  reducers: {
    addContact: contactAdapter.addOne,
    deleteContact(state, action) {
      contactAdapter.removeOne(state, action);
    },
    updateContact(state, action) {
      contactAdapter.updateOne(state, action.payload);
    },
    clearContacts: contactAdapter.removeAll,
  },
});

export const { addContact, deleteContact, updateContact, clearContacts } =
  contactSlice.actions;

export default contactSlice.reducer;
