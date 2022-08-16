import styles from './AddServices.module.css';
import { changeRadio, checker } from '../../features/service/serviceSlice';
import { useSelector } from 'react-redux';

const AddServices = ({ services, dispatch }) => {
  const isChecked = useSelector((state) => state.service.isChecked);

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
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.caption}>Дополнительные услуги</div>
        <div className={styles.list}>
          {services.map((service, serviceId) => (
            <div
              key={serviceId}
              className={!(serviceId + 1 > 2) ? styles.item : styles.hidden}>
              <label className={styles.item_name}>
                <input
                  type='checkbox'
                  className={styles.box}
                  name={service.type}
                  id={serviceId}
                  value={service.type}
                  onChange={() => {
                    dispatch(checker(serviceId));
                  }}
                />
                <span>{service.type}</span>
              </label>
              {service.options.map((option, optionId) => (
                <div key={option.id} className={styles.subItem}>
                  <input
                    type='radio'
                    name={option.id}
                    value={option.name}
                    checked={option.selected}
                    className={styles.radio}
                    onChange={() =>
                      dispatch(changeRadio([serviceId, optionId]))
                    }
                  />
                  <label htmlFor={option.name} className='subItem__wrapper'>
                    <div className={styles.subItem_name}>{option.name}</div>
                    <div className={styles.subItem_price}>
                      {option.prices.price} {option.prices.currency}
                    </div>
                  </label>
                </div>
              ))}
            </div>
          ))}
          {services.length > 2 && (
            <div className={styles.hideBtn} onClick={() => removeHidden()}>
              Показать ещё {services.length - 2} услугу
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddServices;
