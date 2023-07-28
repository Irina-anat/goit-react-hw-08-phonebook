import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filtersSlice';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  //console.log(filter)

  const handleChange = ({ target: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setFilter(normalizedValue));
  };

  return (
    <label>
      <input
        type="text"
        placeholder="Find contacts by Name"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};
