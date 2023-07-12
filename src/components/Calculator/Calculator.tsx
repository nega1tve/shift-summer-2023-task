import { usePointStore } from "../../stores/pointsStore";
import useCalculator from "../../utils/hooks/Calculator/useCalculator";

import { Header, DeliveryCalculator, Footer } from "../Calculator";

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

  // Вызывал хранилище и пробовал дёргать данные в других компонентах.
  // После вызова и внесения данные, они есть только тут
  const [points, packages] = usePointStore((state) => [
    state.points,
    state.packages,
  ]);

  return (
    <>
      <Header />

      <main className="main">
        <img src="../../../img/Calculator/planet.png" alt="" />

        <p>ЦФТ доставка - быстро, удобно, надежно!</p>

        <DeliveryCalculator
          deliveryData={deliveryData}
          selectedDeparturePoint={selectedDeparturePoint}
          selectedDestinationPoint={selectedDestinationPoint}
          packageTypes={packageTypes}
          selectedPackage={selectedPackage}
          onDeparturePointChange={handleDeparturePointChange}
          onDestinationPointChange={handleDestinationPointChange}
          onPackageTypeChange={handlePackageTypeChange}
          onCalculateClick={handleCalculateClick}
        />
      </main>

      <Footer />
    </>
  );
};
