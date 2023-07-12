import styles from "./index.module.scss";

export const SenderAddress = () => {
  return (
    <div className={styles.deliveryInfo}>
      <h2>Адрес для приезда курьера</h2>
      <div className={styles.gridContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              id="street"
              name="street"
              placeholder="Улица"
              required
            />
          </div>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              id="house"
              name="house"
              placeholder="Дом"
              required
            />
          </div>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              id="apartment"
              name="apartment"
              placeholder="Квартира"
              required
            />
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.inputWrapper}>
            <textarea
              id="notes-1"
              name="notes"
              className={styles.notes}
              placeholder="Заметки для курьера"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
