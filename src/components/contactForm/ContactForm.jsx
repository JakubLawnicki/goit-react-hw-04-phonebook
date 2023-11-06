import styles from "./contactForm.module.css";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

export function ContactForm({ contactName, contactNumber, change, add }) {
  const contactId = nanoid();

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        add(contactName, contactNumber, contactId);
      }}
    >
      <label className={styles.label} htmlFor="name">
        Name
      </label>
      <input
        className={styles["input-name"]}
        onChange={(e) => {
          change(e.target.value, e.target.name);
        }}
        type="text"
        name="name"
        id="name"
        value={contactName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={styles.label} htmlFor="number">
        Number
      </label>
      <input
        className={styles["input-tel"]}
        onChange={(e) => {
          change(e.target.value, e.target.name);
        }}
        type="tel"
        name="number"
        id="number"
        value={contactNumber}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button
        className={styles.button}
        onSubmit={(e) => {
          e.preventDefault();
          add(contactName, contactNumber, contactId);
        }}
        type="submit"
      >
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  contactName: PropTypes.string,
  contactNumber: PropTypes.string,
  change: PropTypes.func,
  add: PropTypes.func,
};
