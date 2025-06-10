import React, { useEffect } from 'react';
import styles from './Toast.module.css';

const Toast = ({ message, type = 'info', onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <span className={styles.message}>{message}</span>
      <button className={styles.closeBtn} onClick={onClose}>&times;</button>
    </div>
  );
};

export default Toast;
