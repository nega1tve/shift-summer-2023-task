import { useEffect, useState } from "react";
import axios from "axios";

interface Package {
  id: string;
  name: string;
  length: number;
  width: number;
  height: number;
  weight: number;
}

interface ApiResponsePackage {
  success: boolean;
  packages: Package[];
}

export const useFetchPackages = () => {
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    axios
      .get<ApiResponsePackage>(
        "https://shift-backend.onrender.com/delivery/package/types"
      )
      .then((response) => {
        setPackages(response.data.packages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return packages;
};
