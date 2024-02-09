import css from './ErrorValidate.module.css';

export const ErrorValidate = ({ error }) => {
	return <div className={error}>{error}</div>;
};
