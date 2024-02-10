import axios from 'axios';

const API_KEY = '65c65c8fe5b94dfca2e16d4b';
const END_POINT = 'contacts';

axios.defaults.baseURL = `https://${API_KEY}.mockapi.io/contacts`;

export const getContacts = async () => {
	const { data } = await axios.get(`/${END_POINT}`);
	return data;
};

export const addContacts = async contact => {
	const { data } = await axios.post(`/${END_POINT}`, contact);

	return data;
};

export const deleteContacts = async id => {
	const { data } = await axios.delete(`/${END_POINT}/${id}`);
	return data;
};
