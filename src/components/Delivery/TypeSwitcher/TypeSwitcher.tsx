import React from "react";

import styles from "./index.module.scss";

interface TypeSwitcherProps {
  deliveryType: string;
  handleDeliveryTypeChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export const TypeSwitcher: React.FC<TypeSwitcherProps> = ({
  deliveryType,
  handleDeliveryTypeChange,
}) => {
  return (
    <div className={styles.deliveryTypeSwitcher}>
      <label>
        <input
          type="radio"
          value="standard"
          checked={deliveryType === "standard"}
          onChange={handleDeliveryTypeChange}
        />
        <span
          className={`${styles.deliveryTypeOption} ${
            deliveryType === "standard" ? styles.selected : ""
          }`}
        >
          Обычная доставка
        </span>
      </label>

      <label>
        <input
          type="radio"
          value="express"
          checked={deliveryType === "express"}
          onChange={handleDeliveryTypeChange}
        />
        <span
          className={`${styles.deliveryTypeOption} ${
            deliveryType === "express" ? styles.selected : ""
          }`}
        >
          Экспресс доставка
        </span>
      </label>
    </div>
  );
};
