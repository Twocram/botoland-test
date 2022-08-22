import React from 'react';
import styles from './List.module.css';

import ListItem from '../ListItem';

const List = ({ services, dispatch }) => {
  const removeHidden = () => {
    const items = document.querySelectorAll(`.${styles.hidden}`);
    const btn = document.querySelector(`.${styles.hideBtn}`);
    items.forEach((item) => {
      item.classList.remove(`${styles.hidden}`);
      item.classList.add(`${styles.item}`);
    });
    btn.classList.add(`${styles.hidden}`);
  };
  return (
    <div className={styles.list}>
      {services.map((service, serviceId) => (
        <ListItem
          item={service}
          id={serviceId}
          key={serviceId}
          dispatch={dispatch}
        />
      ))}
      {services.length > 2 && (
        <div className={styles.hideBtn} onClick={() => removeHidden()}>
          Показать ещё {services.length - 2} услугу
        </div>
      )}
    </div>
  );
};

export default List;
