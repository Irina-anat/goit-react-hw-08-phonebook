import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import css from './Contacts.module.css'
import { Helmet } from 'react-helmet-async';
import 'animate.css';


export default function Contacts() {
  const dispatch = useDispatch(); 
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <div className={` animate__animated animate__zoomIn ${ css.container__phonebook }`}>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactList />
        </Section>
      </div>
    </>
  );
};






/*<div className={css.container__phonebook} >
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactList />
        </Section>
      </div>
      {/* <TaskEditor />
      <div>{isLoading && 'Request in progress...'}</div>
  <TaskList />}*/
