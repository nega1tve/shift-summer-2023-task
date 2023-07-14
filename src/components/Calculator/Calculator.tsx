import { Delivery } from "../Delivery";

import { Header, DeliveryCalculator, Footer } from "../Calculator";

import useCalculator from "../../utils/hooks/Calculator/useCalculator";

import styles from "./Calculator.module.scss";

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

  // TODO: сделать хранилище
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
            <div className={styles.imageContainer}>
              <img
                src="../../../assets/img/Calculator/planet.png"
                alt="pic not working, sorry (˚ ˃̣̣̥⌓˂̣̣̥ )"
              />
              <p className={styles.imageText}>
                ЦФТ доставка - быстро, удобно, надежно!
              </p>
            </div>

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
