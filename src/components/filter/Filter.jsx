import styles from './filter.module.css';
import PropTypes from 'prop-types';

export function Filter({ filterValue }) {
  return (
    <div>
      <p className={styles['filter-text']}>Find contacts by name</p>
      <input
        type="text"
        className={styles.input}
        onChange={e => {
          filterValue(e.target.value);
        }}
      />
    </div>
  );
}

Filter.propTypes = {
  filterValue: PropTypes.func,
};
