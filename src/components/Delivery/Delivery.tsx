import React, { useState } from "react";
import {
  TypeSwitcher,
  SenderData,
  RecipientData,
  SenderAddress,
  DeliveryAddress,
  PaymentOptions,
} from "..";
import { useDelivery } from "./hooks/useDelivery";

import styles from "./index.module.scss";

export const Delivery: React.FC = () => {
  const {
    recipientData,
    senderAddress,
    deliveryAddress,
    handleRecipientDataChange,
    handleSenderAddressChange,
    handleDeliveryAddressChange,
    handleSubmit,
  } = useDelivery();

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

        <SenderData />

        <RecipientData
          recipientData={recipientData}
          handleRecipientDataChange={handleRecipientDataChange}
        />

        <SenderAddress
          senderAddress={senderAddress}
          handleSenderAddressChange={handleSenderAddressChange}
        />

        <DeliveryAddress
          deliveryAddress={deliveryAddress}
          handleDeliveryAddressChange={handleDeliveryAddressChange}
        />

        <PaymentOptions />

        <button className={styles.calculate} onClick={handleSubmit}>
          Оформить
        </button>
      </div>
    </div>
  );
};
