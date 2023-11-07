import styles from './contactForm.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export function ContactForm({
  contactList,
  name,
  number,
  setContacts,
  setName,
  setNumber,
}) {
  const id = nanoid();

  return (
    <form
      className={styles.form}
      onSubmit={e => {
        e.preventDefault();

        for (const contact of contactList) {
          if (contact.name.toLowerCase() === name.toLowerCase()) {
            return alert(contact.name + ' is already in contacts.');
          }
        }

        setContacts([...contactList, { name, number, id }]);
        setName((name = ''));
        setNumber((number = ''));
      }}
    >
      <label className={styles.label} htmlFor="name">
        Name
      </label>
      <input
        className={styles['input-name']}
        onChange={e => {
          setName((name = e.target.value));
        }}
        type="text"
        name="name"
        id="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={styles.label} htmlFor="number">
        Number
      </label>
      <input
        className={styles['input-tel']}
        onChange={e => {
          setNumber((number = e.target.value));
        }}
        type="tel"
        name="number"
        id="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button
        className={styles.button}
        onSubmit={e => {
          e.preventDefault();

          for (const contact of contactList) {
            if (contact.name.toLowerCase() === name.toLowerCase()) {
              return alert(contact.name + ' is already in contacts.');
            }
          }

          setContacts([...contactList, { name, number, id }]);
          setName((name = ''));
          setNumber((number = ''));
        }}
        type="submit"
      >
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  contactList: PropTypes.array,
  name: PropTypes.string,
  number: PropTypes.string,
  setContacts: PropTypes.func,
  setName: PropTypes.func,
  setNumber: PropTypes.func,
};
