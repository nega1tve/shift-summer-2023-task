import create from "zustand";
import { persist } from "zustand/middleware";

interface apiData {
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
      apiData: [],
      selectedDeparturePoint: null,
      selectedDestinationPoint: null,
      packageTypes: [],
      selectedPackage: null,
      setApiData: (apiData: apiData) => set(() => ({ apiData })),
      setSelectedDeparturePoint: (selectedDeparturePoint: apiData) =>
        set(() => ({ selectedDeparturePoint })),
      setSelectedDestinationPoint: (selectedDestinationPoint: apiData) =>
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
