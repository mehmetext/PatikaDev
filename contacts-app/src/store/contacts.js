import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const contactsAdaptor = createEntityAdapter();

export const contactsSelectors = contactsAdaptor.getSelectors(
	(state) => state.contacts.contacts
);

const slice = createSlice({
	name: "contacts",
	initialState: {
		contacts: contactsAdaptor.getInitialState(),
	},
	reducers: {
		addContact: (state, action) => {
			contactsAdaptor.addOne(state.contacts, action.payload);
		},
		removeContact: (state, action) => {
			contactsAdaptor.removeOne(state.contacts, action.payload);
		},
		updateContact: (state, action) => {
			contactsAdaptor.updateOne(state.contacts, action.payload);
		},
	},
});

export const useContacts = () => useSelector((state) => state.contacts);

export const { addContact, removeContact, updateContact } = slice.actions;

export default slice.reducer;
