import React from 'react';
import Form from './SectionForm/Form';
import SectionForm from './SectionForm/SectionForm';
import SectionContacts from './SectionContacts/SectionContacts';
import ContactList from './SectionContacts/ContactsList';
import Filter from './SectionContacts/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../Redux/contactsSlice';

export default function App() {
  const dispatch = useDispatch();
  const allContacts = useSelector(state => state.contacts);

  const formSubmitHandler = data => {
    const { id, name, number } = data;

    allContacts.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : dispatch(
          addContact({
            id: id,
            name: name,
            number: number,
          })
        );
  };

  return (
    <div
      style={{
        width: 400,
        padding: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        backgroundColor: 'white',
      }}
    >
      <SectionForm title="Phonebook">
        <Form onSubmit={formSubmitHandler} />
      </SectionForm>
      <SectionContacts title="Contacts">
        <Filter />
        <ContactList />
      </SectionContacts>
    </div>
  );
}
