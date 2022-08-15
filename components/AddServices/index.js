import React from 'react';
import styles from './AddServices.module.css';

const AddServices = ({ services }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.caption}>Дополнительные услуги</div>
        <div className={styles.list}>
          {services.map((service) => (
            <div key={service.type} className={styles.item}>
              <div className={styles.item_name}>
                <input
                  type='checkbox'
                  className={styles.box}
                  name={service.type}
                />
                <label htmlFor={service.type}>{service.type}</label>
              </div>
              {service.options.map((option) => (
                <div key={option.id} className={styles.subItem}>
                  <input type='radio' />
                  <div className='subItem__wrapper'>
                    <div className={styles.subItem_name}>{option.name}</div>
                    <div className={styles.subItem_price}>
                      {option.prices.price} {option.prices.currency}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddServices;
