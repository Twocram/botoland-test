import React from 'react';
import styles from './ListItem.module.css';
import { checker } from '../../features/service/serviceSlice';
import ListSubItem from '../ListSubItem';

const ListItem = ({ item, id, dispatch }) => {
  return (
    <div className={!(id + 1 > 2) ? styles.item : styles.hidden}>
      <label className={styles.item_name}>
        <input
          type='checkbox'
          className={styles.box}
          name={item.type}
          id={id}
          value={item.type}
          onChange={() => {
            dispatch(checker(id));
          }}
        />
        <span>{item.type}</span>
      </label>
      {item.options.map((option, optionId) => (
        <ListSubItem
          option={option}
          optionId={optionId}
          dispatch={dispatch}
          key={optionId}
          id={id}
        />
      ))}
    </div>
  );
};

export default ListItem;
