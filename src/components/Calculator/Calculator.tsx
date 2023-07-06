import React, { useEffect, useState } from "react";
import axios from "axios";

interface ApiResponsePoint {
  success: boolean;
  points: Point[];
}

interface Point {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

interface ApiResponsePackage {
  success: boolean;
  packages: Package[];
}

interface Package {
  id: string;
  name: string;
  length: number;
  width: number;
  height: number;
  weight: number;
}

export const Calculator: React.FC = () => {
  const [apiData, setApiData] = useState<Point[]>([]);
  const [selectedDeparturePoint, setSelectedDeparturePoint] =
    useState<Point | null>(null);
  const [selectedDestinationPoint, setSelectedDestinationPoint] =
    useState<Point | null>(null);

  const [packageTypes, setPackageTypes] = useState<Package[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  useEffect(() => {
    axios
      .get<ApiResponsePoint>(
        "https://shift-backend.onrender.com/delivery/points"
      )
      .then((response) => {
        setApiData(response.data.points);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get<ApiResponsePackage>(
        "https://shift-backend.onrender.com/delivery/package/types"
      )
      .then((response) => {
        setPackageTypes(response.data.packages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeparturePointChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedPoint = apiData.find(
      (point) => point.id === event.target.value
    );
    setSelectedDeparturePoint(selectedPoint || null);
  };

  const handleDestinationPointChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedPoint = apiData.find(
      (point) => point.id === event.target.value
    );
    setSelectedDestinationPoint(selectedPoint || null);
  };

  const handlePackageTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedPackageType = packageTypes.find(
      (packageType) => packageType.id === event.target.value
    );
    setSelectedPackage(selectedPackageType || null);
  };

  const handleCalculateClick = () => {
    if (selectedDeparturePoint && selectedDestinationPoint && selectedPackage) {
      const requestData = {
        package: {
          length: selectedPackage.length.toString(),
          width: selectedPackage.width.toString(),
          weight: selectedPackage.weight.toString(),
          height: selectedPackage.length.toString(),
        },
        senderPoint: {
          latitude: selectedDeparturePoint.latitude.toString(),
          longitude: selectedDeparturePoint.longitude.toString(),
        },
        receiverPoint: {
          latitude: selectedDestinationPoint.latitude.toString(),
          longitude: selectedDestinationPoint.longitude.toString(),
        },
      };

      axios
        .post("https://shift-backend.onrender.com/delivery/calc", requestData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <header className="header">
        <button className="button-login">Войти в личный кабинет</button>
      </header>

      <main className="main">
        <img src="../../../img/Planet.png" alt="" />
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
              {apiData.map((point) => (
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
              {apiData.map((point) => (
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
