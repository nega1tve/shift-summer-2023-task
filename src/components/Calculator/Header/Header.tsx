import { useState } from "react";
import { Login } from "../..";

import styles from "./Header.module.scss";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <header className={styles.header}>
      <button className={styles.buttonLogin} onClick={openModal}>
        Войти в личный кабинет
      </button>
      {isModalOpen && <Login />}
    </header>
  );
};
