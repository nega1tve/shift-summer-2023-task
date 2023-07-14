import React from "react";
import styles from "./RecipientData.module.scss";

interface RecipientDataProps {
  recipientData: {
    lastName: string;
    firstName: string;
    middleName: string;
    phone: string;
  };
  handleRecipientDataChange: (data: any) => void;
}

export const RecipientData: React.FC<RecipientDataProps> = ({
  recipientData,
  handleRecipientDataChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    handleRecipientDataChange({ [name]: value });
  };

  return (
    <div className={styles.deliveryInfo}>
      <h2>Данные получателя</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Фамилия"
                  required
                  value={recipientData.lastName}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Имя"
                  required
                  value={recipientData.firstName}
                  onChange={handleChange}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  placeholder="Отчество (при наличии)"
                  value={recipientData.middleName}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Телефон"
                  required
                  value={recipientData.phone}
                  onChange={handleChange}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
