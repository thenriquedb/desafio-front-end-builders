import { useEffect, useState } from "react";
import api from "@features/weather/services/api";

export interface Response {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface Clouds {
  all: number;
}

interface Coord {
  lon: number;
  lat: number;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export const useOpenWeather = ({ lat, lon }: { lat: number, lon: number }) => {
  const [data, setData] = useState<Response>();
  const [error, setError] = useState<{ error: Error }>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await api.get('/weather', { params: { lat, lon } })
      setData(response.data as Response);
      setIsSuccess(true);
    } catch (e) {
      setIsError(true);
      setError({ error: e as Error })
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (lat && lon) {
      fetchData();
    }
  }, [lat, lon])

  return {
    data,
    error,
    isError,
    isLoading,
    isSuccess,
  };
}