import styles from './filter.module.css';
import PropTypes from 'prop-types';

export function Filter({ filter, setFilter }) {
  return (
    <div>
      <p className={styles['filter-text']}>Find contacts by name</p>
      <input
        type="text"
        className={styles.input}
        onChange={e => {
          setFilter((filter = e.target.value));
        }}
      />
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};
