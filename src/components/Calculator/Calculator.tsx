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

  return (
    <>
      <Header />

      <main className="main">
        <img src="../../../img/planet.png" alt="" />

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
