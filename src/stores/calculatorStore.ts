import create from "zustand";
import { persist } from "zustand/middleware";

import { useFetchPoints, useFetchPackages } from "../utils/hooks";

export const useCalculatorStore = create(
  persist(
    (set) => ({
      deliveryData: [],
      packageTypes: [],
      setDeliveryData: (data) => set({ deliveryData: data }),
      setPackageTypes: (data) => set({ packageTypes: data }),
    }),
    {
      name: "calculator-store",
      getStorage: () => localStorage,
    }
  )
);
