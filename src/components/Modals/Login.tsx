import React from "react";

import styles from "./index.module.scss";

export const Login = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalOverlay}>
        <h2>Вход в кабинет</h2>
        <p>Введите номер телефона для входа в личный кабинет</p>
        <input type="text" placeholder="Введите телефон" />
      </div>
    </div>
  );
};
