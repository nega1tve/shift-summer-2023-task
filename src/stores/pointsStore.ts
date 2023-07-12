import { create } from "zustand";

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

interface PointStore {
  points: Point[];
  packages: Package[];

  setPoints: (points: Point[]) => void;
  setPackages: (packages: Package[]) => void;
}

export const usePointStore = create<PointStore>((set) => ({
  points: [],
  packages: [],

  setPoints: (points) => set({ points }),
  setPackages: (packages) => set({ packages }),
}));
