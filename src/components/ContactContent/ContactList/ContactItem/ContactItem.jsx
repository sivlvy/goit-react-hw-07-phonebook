import css from './ContactItem.module.css';

import { deleteContactsThunk } from '../../../../redux/thunk';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ id, name, phone }) => {
	const dispatch = useDispatch();

	const handleDelete = () => dispatch(deleteContactsThunk(id));

	return (
		<li className={css.item}>
			<p className={css.contact_text}>
				{name}: {phone}
			</p>
			<button type="button" className={css.btn} onClick={handleDelete}>
				Delete
			</button>
		</li>
	);
};
