import React, { useState } from 'react';
import styles from './Accordion.module.css';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <button 
            className={`${styles.header} ${activeIndex === index ? styles.active : ''}`}
            onClick={() => toggleItem(index)}
          >
            {item.title}
          </button>
          {activeIndex === index && (
            <div className={styles.content}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
