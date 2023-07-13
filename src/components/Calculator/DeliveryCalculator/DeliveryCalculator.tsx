import React from "react";
import { usePointStore } from "../../../stores/pointsStore";

import styles from "./index.module.scss";

interface DeliveryCalculatorProps {
  deliveryData: Point[];
  selectedDeparturePoint: Point | null;
  selectedDestinationPoint: Point | null;
  packageTypes: Package[];
  selectedPackage: Package | null;
  onDeparturePointChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onDestinationPointChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  onPackageTypeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onCalculateClick: () => void;
}

interface Point {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

interface Package {
  id: string;
  name: string;
  length: number;
  width: number;
  height: number;
  weight: number;
}

export const DeliveryCalculator: React.FC<DeliveryCalculatorProps> = ({
  deliveryData,
  selectedDeparturePoint,
  selectedDestinationPoint,
  packageTypes,
  selectedPackage,
  onDeparturePointChange,
  onDestinationPointChange,
  onPackageTypeChange,
  onCalculateClick,
}) => {
  // Проверка работы stora, не работает.
  // При вызове в одном компоненте, данные не прокидываются в другие
  const points = usePointStore((state) => state.points);
  const packages = usePointStore((state) => state.packages);

  // console.log(points);

  return (
    <div className={styles.calculateDelivery}>
      <div>
        {points.map((point) => (
          <div key={point.id}>
            <h3>{point.name}</h3>
            <p>Latitude: {point.latitude}</p>
            <p>Longitude: {point.longitude}</p>
          </div>
        ))}

        {packages.map((pack) => (
          <div key={pack.id}>
            <h3>{pack.name}</h3>
            <p>Length: {pack.length}</p>
            <p>Width: {pack.width}</p>
            <p>Height: {pack.height}</p>
            <p>Weight: {pack.weight}</p>
          </div>
        ))}
      </div>
      <h1>Рассчитать доставку</h1>
      <div>
        <label>Город отправки</label>
        <select
          value={selectedDeparturePoint?.id || ""}
          onChange={onDeparturePointChange}
        >
          {deliveryData.map((point) => (
            <option key={point.id} value={point.id}>
              {point.name}
            </option>
          ))}
        </select>
        <div className={styles.textUnderline}>
          {deliveryData.slice(0, 3).map((point) => (
            <p key={point.id}>{point.name}</p>
          ))}
        </div>
      </div>

      <div>
        <label>Город назначения</label>
        <select
          value={selectedDestinationPoint?.id || ""}
          onChange={onDestinationPointChange}
        >
          {deliveryData.map((point) => (
            <option key={point.id} value={point.id}>
              {point.name}
            </option>
          ))}
        </select>
        <div className={styles.textUnderline}>
          {deliveryData.slice(1, 4).map((point) => (
            <p key={point.id}>{point.name}</p>
          ))}
        </div>
      </div>

      <div>
        <label>Размер посылки</label>
        <select
          value={selectedPackage?.id || ""}
          onChange={onPackageTypeChange}
        >
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

      <button className={styles.calculate} onClick={onCalculateClick}>
        Рассчитать
      </button>
    </div>
  );
};
