import React, { useState } from "react";

import {
  TypeSwitcher,
  RecipientData,
  SenderData,
  SenderAddress,
  DeliveryAddress,
} from "..";

import styles from "./index.module.scss";
import { PaymentOptions } from "./PaymentOptions";

export const Delivery: React.FC = () => {
  const [deliveryType, setDeliveryType] = useState<string>("standard");

  const handleDeliveryTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDeliveryType(event.target.value);
  };

  return (
    <div className={styles.containerDelivery}>
      <button className={styles.buttonLogin}>Войти в личный кабинет</button>
      <div className={styles.sheet}>
        <h1>Оформить отправление</h1>

        <TypeSwitcher
          deliveryType={deliveryType}
          handleDeliveryTypeChange={handleDeliveryTypeChange}
        />

        <RecipientData />
        <SenderData />
        <SenderAddress />
        <DeliveryAddress />
        <PaymentOptions />

        <button className={styles.calculate}>Оформить</button>
      </div>
    </div>
  );
};
