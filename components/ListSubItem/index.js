import React from 'react';
import styles from './ListSubItem.module.css';
import { changeRadio } from '../../features/service/serviceSlice';

const ListSubItem = ({ option, optionId, dispatch, id }) => {
  return (
    <div key={option.id} className={styles.subItem}>
      <input
        type='radio'
        name={option.id}
        value={option.name}
        checked={option.selected}
        className={styles.radio}
        onChange={() => dispatch(changeRadio([id, optionId]))}
      />
      <label htmlFor={option.name} className='subItem__wrapper'>
        <div className={styles.subItem_name}>{option.name}</div>
        <div className={styles.subItem_price}>
          {option.prices.price} {option.prices.currency}
        </div>
      </label>
    </div>
  );
};

export default ListSubItem;
