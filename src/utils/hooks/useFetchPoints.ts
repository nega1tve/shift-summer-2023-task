import { useEffect, useState } from "react";
import axios from "axios";

interface Point {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

interface ApiResponsePoint {
  success: boolean;
  points: Point[];
}

export const useFetchPoints = () => {
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    axios
      .get<ApiResponsePoint>(
        "https://shift-backend.onrender.com/delivery/points"
      )
      .then((response) => {
        setPoints(response.data.points);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return points;
};
