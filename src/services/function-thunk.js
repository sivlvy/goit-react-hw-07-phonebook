import { Notify } from 'notiflix';
import {
	addContactsThunk,
	deleteContactsThunk,
	getContactsThunk,
} from '../redux/thunk';

const arrThunk = [addContactsThunk, deleteContactsThunk, getContactsThunk];

export const appendThunk = type => arrThunk.map(thunk => thunk[type]);

export const STATUS = {
	IDLE: 'idle',
	PENDING: 'pending',
	REJECTED: 'rejected',
	FULFILLED: 'fulfilled',
};
export function handlePending({ contacts }) {
	contacts.status = STATUS.PENDING;
}

export function handleFulfilled({ contacts }) {
	contacts.status = STATUS.FULFILLED;
	contacts.error = null;
}
export function handleRejected({ contacts }, { error }) {
	contacts.status = STATUS.REJECTED;
	contacts.error = error.message;
}
export function handleFulfilledAdd({ contacts }, { payload }) {
	Notify.success`${payload.name} successfully added`;
	contacts.items.push(payload);
}
export function handleFulfilledGet({ contacts }, { payload }) {
	contacts.items = payload;
}
export function handleFulfilledDel({ contacts }, { payload }) {
	Notify.info(`${payload.name} successfully deleted`);
	contacts.items = contacts.items.filter(({ id }) => id !== payload.id);
}
