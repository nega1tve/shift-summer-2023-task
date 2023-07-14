import React from "react";

import styles from "./index.module.scss";

export const PaymentOptions: React.FC = () => {
  return (
    <div className={styles.deliveryInfo}>
      <h2>Кто оплачивает доставку</h2>
      <div className={styles.toggleContainer}>
        <label htmlFor="receiver">
          <input
            type="radio"
            id={styles.receiver}
            name="payment"
            value="receiver"
          />
          <span className={styles.toggleOption}></span>
          <span>Получатель</span>
        </label>
        <label htmlFor="sender">
          <input
            type="radio"
            id={styles.sender}
            name="payment"
            value="sender"
          />
          <span className={styles.toggleOption}></span>
          <span>Отправитель</span>
        </label>
      </div>
    </div>
  );
};
