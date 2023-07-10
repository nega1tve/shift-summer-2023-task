import create from "zustand";
import { persist } from "zustand/middleware";

interface deliveryData {
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

export const useCalculatorStore = create(
  persist(
    (set) => ({
      deliveryData: [],
      selectedDeparturePoint: null,
      selectedDestinationPoint: null,

      packageTypes: [],
      selectedPackage: null,

      setDeliveryData: (deliveryData: deliveryData) =>
        set(() => ({ deliveryData })),
      setSelectedDeparturePoint: (selectedDeparturePoint: deliveryData) =>
        set(() => ({ selectedDeparturePoint })),
      setSelectedDestinationPoint: (selectedDestinationPoint: deliveryData) =>
        set(() => ({ selectedDestinationPoint })),

      setPackageTypes: (packageTypes: Package) => set(() => ({ packageTypes })),
      setSelectedPackage: (selectedPackage: Package) =>
        set(() => ({ selectedPackage })),
    }),
    {
      name: "calculator-store",
      getStorage: () => sessionStorage,
    }
  )
);
