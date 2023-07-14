import React from "react";
import styles from "./index.module.scss";

interface SenderAddressProps {
  senderAddress: {
    street: string;
    house: string;
    apartment: string;
    notes: string;
  };
  handleSenderAddressChange: (address: any) => void;
}

export const SenderAddress: React.FC<SenderAddressProps> = ({
  senderAddress,
  handleSenderAddressChange,
}) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    handleSenderAddressChange({ [name]: value });
  };

  return (
    <div className={styles.deliveryInfo}>
      <h2>Адрес отправителя</h2>
      <div className={styles.gridContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              id="street"
              name="street"
              placeholder="Улица"
              required
              value={senderAddress.street}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              id="house"
              name="house"
              placeholder="Дом"
              required
              value={senderAddress.house}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              id="apartment"
              name="apartment"
              placeholder="Квартира"
              required
              value={senderAddress.apartment}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.inputWrapper}>
            <textarea
              id="notes"
              name="notes"
              className={styles.notes}
              placeholder="Заметки для курьера"
              value={senderAddress.notes}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
