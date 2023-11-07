import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { useState, useEffect } from 'react';

export function App() {
  const initialValue = () => {
    if (JSON.parse(localStorage.getItem('contacts')) === null) {
      return [];
    }
    return JSON.parse(localStorage.getItem('contacts'));
  };
  const [contacts, setContacts] = useState(initialValue());
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        fontSize: 40,
        color: '#010101',
        margin: 40,
        paddingLeft: 40,
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm
        contactList={contacts}
        name={name}
        number={number}
        setName={setName}
        setNumber={setNumber}
        setContacts={setContacts}
      />
      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList
        contactList={contacts}
        filter={filter}
        setContacts={setContacts}
      />
    </div>
  );
}
