import { Delivery } from "../Delivery";

import { Header, DeliveryCalculator, Footer } from "../Calculator";

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
    isDeliveryVisible,
    isCalculatorVisible,
  } = useCalculator();

  // проверка добавления данных в хранилище
  // const [points, packages] = usePointStore((state) => [
  //   state.points,
  //   state.packages,
  // ]);

  return (
    <>
      {isCalculatorVisible && (
        <div>
          <Header />

          <main className="main">
            <img
              src="../../../assets/img/Calculator/planet.png"
              alt="pic not working, sorry (˚ ˃̣̣̥⌓˂̣̣̥ )"
            />

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
        </div>
      )}
      {isDeliveryVisible && <Delivery />}
    </>
  );
};
