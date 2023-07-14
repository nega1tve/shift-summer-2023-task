import React from "react";
import styles from "./DeliveryAddress.module.scss";

interface DeliveryAddressProps {
  deliveryAddress: {
    street: string;
    house: string;
    apartment: string;
    notes: string;
  };
  handleDeliveryAddressChange: (address: any) => void;
}

export const DeliveryAddress: React.FC<DeliveryAddressProps> = ({
  deliveryAddress,
  handleDeliveryAddressChange,
}) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    handleDeliveryAddressChange({ [name]: value });
  };

  return (
    <div className={styles.deliveryInfo}>
      <h2>Адрес доставки</h2>
      <div className={styles.gridContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              id="street"
              name="street"
              placeholder="Улица"
              required
              value={deliveryAddress.street}
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
              value={deliveryAddress.house}
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
              value={deliveryAddress.apartment}
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
              value={deliveryAddress.notes}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
