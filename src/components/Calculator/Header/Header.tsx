import React, { useState } from "react";
import { Login } from "../..";

import styles from "./index.module.scss";

export const Header: React.FC = () => {
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
