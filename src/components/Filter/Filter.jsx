import css from './Filter.module.css';
import { setFilter } from '../../redux/contactsSlice';

import { useDispatch } from 'react-redux';
export const Filter = () => {
	const dispatch = useDispatch();

	const findContact = ({ target: { value } }) => dispatch(setFilter(value));

	return (
		<label className={css.label} htmlFor="filter">
			<span className={css.label_text}>Find contacts by name:</span>
			<input
				type="text"
				id="filter"
				name="filter"
				className={css.input}
				onInput={findContact}
			/>
		</label>
	);
};
