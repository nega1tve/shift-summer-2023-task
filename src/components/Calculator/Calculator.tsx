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
  //   const [point, setPoint] = useState<string>("");
  const [departurePoint, setDeparturePoint] = useState<string>("1");
  const [destinationPoint, setDestinationPoint] = useState<string>("2");

  const [packageTypes, setPackageTypes] = useState<Package[]>([]);

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

  return (
    <>
      <header className="header">
        <button className="button-login">Войти в личный кабинет</button>
      </header>

      <main className="main">
        <img src="../../../img/Planet.png" alt="" />
        {/* <p>ЦФТ доставка - быстро, удобно, надежно!</p> */}

        <div className="calculate-delivery">
          <h1>Рассчитать доставку</h1>
          <div>
            <p>Город отправки</p>
            <select
              value={departurePoint}
              onChange={(event) => setDeparturePoint(event.target.value)}
              style={{ fontWeight: 700 }}
            >
              {/* <option value="">Москва</option> */}
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
              value={destinationPoint}
              onChange={(event) => setDestinationPoint(event.target.value)}
              style={{ fontWeight: 700 }}
            >
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
            <select style={{ fontWeight: 700 }}>
              {packageTypes.map((packageType) => (
                <option key={packageType.id} value={packageType.id}>
                  {packageType.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </main>

      <footer className="footer"></footer>
    </>
  );
};
