import React, { useState } from "react";

export const Delivery: React.FC = () => {
  const [deliveryType, setDeliveryType] = useState<string>("standard");

  const handleDeliveryTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDeliveryType(event.target.value);
  };

  return (
    <div className="container-delivery">
      <button className="button-login button-delivery">
        Войти в личный кабинет
      </button>
      <div className="sheet">
        <h1>Оформить отправление</h1>

        <div className="delivery-type-switcher">
          <label>
            <input
              type="radio"
              value="standard"
              checked={deliveryType === "standard"}
              onChange={handleDeliveryTypeChange}
            />
            <span
              className={`delivery-type-option ${
                deliveryType === "standard" ? "selected" : ""
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
              className={`delivery-type-option ${
                deliveryType === "express" ? "selected" : ""
              }`}
            >
              Экспресс доставка
            </span>
          </label>
        </div>

        <div className="delivery-info">
          <h2>Данные получателя</h2>
          <table>
            <tr>
              <td>
                <div className="input-wrapper">
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
                <div className="input-wrapper">
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
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="middleName"
                    name="middleName"
                    placeholder="Отчество (при наличии)"
                  />
                </div>
              </td>
              <td>
                <div className="input-wrapper">
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
          </table>
        </div>

        <div className="delivery-info">
          <h2>Данные отправителя</h2>
          <table>
            <tr>
              <td>
                <div className="input-wrapper">
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
                <div className="input-wrapper">
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
                <div className="input-wrapper">
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
                <div className="input-wrapper">
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
          </table>
        </div>

        <div className="delivery-info">
          <h2>Адрес для приезда курьера</h2>
          <div className="grid-container">
            <div className="left-column">
              <div className="input-wrapper">
                <input
                  type="text"
                  id="street"
                  name="street"
                  placeholder="Улица"
                  required
                />
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="house"
                  name="house"
                  placeholder="Дом"
                  required
                />
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="apartment"
                  name="apartment"
                  placeholder="Квартира"
                  required
                />
              </div>
            </div>
            <div className="right-column">
              <div className="input-wrapper">
                <textarea
                  id="notes-1"
                  name="notes"
                  className="notes"
                  placeholder="Заметки для курьера"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="delivery-info">
          <h2>Адрес доставки</h2>
          <div className="grid-container">
            <div className="left-column">
              <div className="input-wrapper">
                <input
                  type="text"
                  id="street"
                  name="street"
                  placeholder="Улица"
                  required
                />
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="house"
                  name="house"
                  placeholder="Дом"
                  required
                />
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="apartment"
                  name="apartment"
                  placeholder="Квартира"
                  required
                />
              </div>
            </div>
            <div className="right-column">
              <div className="input-wrapper">
                <textarea
                  id="notes-2"
                  name="notes"
                  className="notes"
                  placeholder="Заметки для курьера"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="delivery-info">
          <h2>Кто оплачивает доставку</h2>
          <div className="toggle-container">
            <label htmlFor="receiver">
              <input
                type="radio"
                id="receiver"
                name="payment"
                value="receiver"
              />
              <span className="toggle-option"></span>
              <span>Получатель</span>
            </label>
            <label htmlFor="sender">
              <input type="radio" id="sender" name="payment" value="sender" />
              <span className="toggle-option"></span>
              <span>Отправитель</span>
            </label>
          </div>
        </div>
        <button className="calculate">Оформить</button>
      </div>
    </div>
  );
};
