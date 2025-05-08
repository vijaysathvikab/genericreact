import React from 'react';
import styles from './Badge.module.css';

const Badge = ({ children, variant = 'primary', ...props }) => {
  return (
    <span className={`${styles.badge} ${styles[variant]}`} {...props}>
      {children}
    </span>
  );
};

export default Badge;
