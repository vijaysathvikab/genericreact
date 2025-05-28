import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  return (
    <button 
      className={`${styles.btn} ${styles[variant]} ${size === 'sm' ? styles.sm : size === 'lg' ? styles.lg : ''} ${className}`} 
      type={props.type || 'button'}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
