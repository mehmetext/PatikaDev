import store from ".";
import { addContact, removeContact, updateContact } from "./contacts";

export const addContactDispatch = (item) => {
	store.dispatch(addContact(item));
};

export const removeContactDispatch = (id) => {
	store.dispatch(removeContact(id));
};

export const updateContactDispatch = (payload) => {
	store.dispatch(updateContact(payload));
};
