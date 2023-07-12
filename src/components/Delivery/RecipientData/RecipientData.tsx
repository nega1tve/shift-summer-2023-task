import styles from "./index.module.scss";

export const RecipientData = () => {
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
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
