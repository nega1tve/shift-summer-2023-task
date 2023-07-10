import React, { useEffect, useState } from "react";
import axios from "axios";

// import { useCalculatorStore } from './calculatorStore';
import useCalculator from "../../utils/hooks/Calculator/useCalculator";

export const Calculator: React.FC = () => {
  const {
    deliveryData,
    selectedDeparturePoint,
    selectedDestinationPoint,
    packageTypes,
    selectedPackage,
    handleDeparturePointChange,
    handleDestinationPointChange,
    handlePackageTypeChange,
    handleCalculateClick,
  } = useCalculator();

  return (
    <>
      <header className="header">
        <button className="button-login">Войти в личный кабинет</button>
      </header>

      <main className="main">
        <img src="../../../img/planet.png" alt="" />
        {/* Зачем надпись, если в фоне она уже есть?! */}
        {/* <p>ЦФТ доставка - быстро, удобно, надежно!</p> */}

        <div className="calculate-delivery">
          <h1>Рассчитать доставку</h1>
          <div>
            <p>Город отправки</p>
            <select
              value={selectedDeparturePoint?.id || ""}
              onChange={handleDeparturePointChange}
              style={{ fontWeight: 700 }}
            >
              {/* бага с  первым значением */}
              {deliveryData.map((point) => (
                <option key={point.id} value={point.id}>
                  {point.name}
                </option>
              ))}
            </select>
            <div style={{ display: "flex" }}>
              <p style={{ textDecoration: "underline", marginRight: "5px" }}>
                Санкт-Петербург
              </p>
              <p style={{ textDecoration: "underline", marginRight: "5px" }}>
                Новосибирск
              </p>
              <p style={{ textDecoration: "underline", marginRight: "5px" }}>
                Томск
              </p>
            </div>
          </div>

          <div>
            <p>Город назначения</p>
            <select
              value={selectedDestinationPoint?.id || ""}
              onChange={handleDestinationPointChange}
              style={{ fontWeight: 700 }}
            >
              {/* и тут бага с  первым значением */}
              {deliveryData.map((point) => (
                <option key={point.id} value={point.id}>
                  {point.name}
                </option>
              ))}
            </select>
            <div style={{ display: "flex" }}>
              <p style={{ textDecoration: "underline", marginRight: "5px" }}>
                Москва
              </p>
              <p style={{ textDecoration: "underline", marginRight: "5px" }}>
                Новосибирск
              </p>
              <p style={{ textDecoration: "underline", marginRight: "5px" }}>
                Томск
              </p>
            </div>
          </div>

          <div>
            <p>Размер посылки</p>
            <select
              value={selectedPackage?.id || ""}
              onChange={handlePackageTypeChange}
              style={{ fontWeight: 700 }}
            >
              {/* Нужно сделать таб для ввода данных вручную */}
              <option value="">Конверт</option>
              {/* и здесь тоже бага с  первым значением */}
              {packageTypes.map((packageType) => (
                <option key={packageType.id} value={packageType.id}>
                  {packageType.name}
                </option>
              ))}
            </select>
            {selectedPackage && (
              <div>
                <p>Выбранный тип посылки:</p>
                <p>{selectedPackage.name}</p>
                <p>Длина: {selectedPackage.length}</p>
                <p>Ширина: {selectedPackage.width}</p>
                <p>Высота: {selectedPackage.height}</p>
                <p>Вес: {selectedPackage.weight}</p>
              </div>
            )}
          </div>

          <button className="calculate" onClick={handleCalculateClick}>
            Рассчитать
          </button>
        </div>
      </main>

      <footer className="footer"></footer>
    </>
  );
};
