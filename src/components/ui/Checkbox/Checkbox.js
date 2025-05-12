import React from 'react';
import styles from './Checkbox.module.css';

const Checkbox = ({ label, ...props }) => {
  return (
    <label className={styles.wrapper}>
      <input type="checkbox" className={styles.input} {...props} />
      <span className={styles.label}>{label}</span>
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default Checkbox;
