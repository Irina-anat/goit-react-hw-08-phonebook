import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  //console.log(contacts)
  const filterContacts = useSelector(selectFilter);
  // console.log(filterContacts);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContacts.toLowerCase())
  );
  //console.log(visibleContacts)

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
    // console.log(contactId)
    Notify.failure(`Contact successfully deleted.`);
  };

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={css.contact__list} key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button
            value={id}
            onClick={() => handleDeleteContact(id)}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
