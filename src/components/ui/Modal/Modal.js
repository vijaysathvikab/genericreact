import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.css';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()} ref={modalRef}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
