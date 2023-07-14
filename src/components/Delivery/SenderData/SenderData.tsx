import styles from "./SenderData.module.scss";

export const SenderData = () => {
  return (
    <div className={styles.deliveryInfo}>
      <h2>Данные отправителя</h2>
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
                  value={"Иванов"}
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
                  value={"Иван"}
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
                  value={"Иванович"}
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
                  value={"89990009999"}
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
