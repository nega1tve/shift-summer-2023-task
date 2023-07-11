import React from "react";

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
  return (
    <div className="calculate-delivery">
      <h1>Рассчитать доставку</h1>
      <div>
        <label>Город отправки</label>
        <select
          value={selectedDeparturePoint?.id || ""}
          onChange={onDeparturePointChange}
          style={{ fontWeight: 700 }}
        >
          {deliveryData.map((point) => (
            <option key={point.id} value={point.id}>
              {point.name}
            </option>
          ))}
        </select>
        <div style={{ display: "flex" }}>
          {deliveryData.slice(0, 3).map((point) => (
            <p
              key={point.id}
              style={{ textDecoration: "underline", marginRight: "5px" }}
            >
              {point.name}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label>Город назначения</label>
        <select
          value={selectedDestinationPoint?.id || ""}
          onChange={onDestinationPointChange}
          style={{ fontWeight: 700 }}
        >
          {deliveryData.map((point) => (
            <option key={point.id} value={point.id}>
              {point.name}
            </option>
          ))}
        </select>
        <div style={{ display: "flex" }}>
          {deliveryData.slice(0, 3).map((point) => (
            <p
              key={point.id}
              style={{ textDecoration: "underline", marginRight: "5px" }}
            >
              {point.name}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label>Размер посылки</label>
        <select
          value={selectedPackage?.id || ""}
          onChange={onPackageTypeChange}
          style={{ fontWeight: 700 }}
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

      <button className="calculate" onClick={onCalculateClick}>
        Рассчитать
      </button>
    </div>
  );
};
