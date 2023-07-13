import { useEffect, useState } from "react";
import axios from "axios";

import { useFetchPoints, useFetchPackages } from "..";
import { useCalculatorStore } from "../../../stores/calculatorStore";

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

const useCalculator = () => {
  const [selectedDeparturePoint, setSelectedDeparturePoint] =
    useState<Point | null>(null);
  const [selectedDestinationPoint, setSelectedDestinationPoint] =
    useState<Point | null>(null);

  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const deliveryData = useFetchPoints();
  const packageTypes = useFetchPackages();

  const [isDeliveryVisible, setDeliveryVisible] = useState(false);
  const [isCalculatorVisible, setCalculatorVisible] = useState(true);

  const handleDeparturePointChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedPoint = deliveryData.find(
      (point) => point.id === event.target.value
    );
    setSelectedDeparturePoint(selectedPoint || null);
  };

  const handleDestinationPointChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedPoint = deliveryData.find(
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
      const requestDeliveryCalculator = {
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
        .post(
          "https://shift-backend.onrender.com/delivery/calc",
          requestDeliveryCalculator
        )
        .then((response) => {
          console.log(response.data);
          setCalculatorVisible(false);
          setDeliveryVisible(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return {
    deliveryData,
    selectedDeparturePoint,
    selectedDestinationPoint,
    packageTypes,
    selectedPackage,
    handleDeparturePointChange,
    handleDestinationPointChange,
    handlePackageTypeChange,
    handleCalculateClick,
    isDeliveryVisible,
    isCalculatorVisible,
  };
};

export default useCalculator;
