import styles from "./contactList.module.css";
import PropTypes from "prop-types";

export function ContactList({ list, filter, del }) {
  if (filter === "") {
    return (
      <ul className={styles["contact-list"]}>
        {list.map((item) => (
          <li className={styles.contact} key={item.id}>
            <p>
              {item.name}: {item.number}
            </p>
            <button
              type="button"
              className={styles.button}
              id={item.id}
              onClick={(e) => {
                del(e.target.id);
                localStorage.removeItem(item.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
  let dispName;
  let dispNumber;
  let id;
  list.forEach((contact) => {
    if (contact.name.toLowerCase().includes(filter.toLowerCase())) {
      dispName = contact.name;
      dispNumber = contact.number;
      id = contact.id;
    }
  });
  return (
    <ul className={styles["contact-list"]}>
      <li className={styles.contact} key={id}>
        {dispName}: {dispNumber}
      </li>
    </ul>
  );
}

ContactList.propTypes = {
  list: PropTypes.array,
  filter: PropTypes.string,
  del: PropTypes.func,
};
