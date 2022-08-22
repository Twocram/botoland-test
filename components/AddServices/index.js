import styles from './AddServices.module.css';
import List from '../List';

const AddServices = ({ services, dispatch }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.caption}>Дополнительные услуги</div>
        <List services={services} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default AddServices;
