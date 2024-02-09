import { createAsyncThunk } from '@reduxjs/toolkit';

import {
	getContacts,
	addContacts,
	deleteContacts,
} from 'services/contacts-api';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
	getContacts()
);

export const addContactsThunk = createAsyncThunk(
	'contacts/addContact',
	contact => addContacts(contact)
);

export const deleteContactsThunk = createAsyncThunk(
	'contacts/deleteContact',
	id => deleteContacts(id)
);
