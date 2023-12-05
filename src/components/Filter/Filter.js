import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filtersSlice';
import { selectFilter } from 'redux/contacts/selectors';
import css from '../ContactForm/ContactForm.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  //console.log(filter)

  const handleChange = ({ target: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setFilter(normalizedValue));
  };

  return (
    <label className={css.form}>
      <input
        type="text"
        placeholder="Find contacts by name"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};
