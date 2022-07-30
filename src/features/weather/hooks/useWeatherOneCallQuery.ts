import { useEffect } from "react";

import { useWeatherApi } from "./useWeatherApi";

export interface Response {
  current: Current;
  daily: Daily[];
  hourly: Current[];
  lat: number;
  lon: number;
  minutely: Minutely[];
  timezone_offset: number;
  timezone: string;
}

interface Current {
  dt: number;
  sunrise?: number;
  sunset?: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Weather[];
  pop?: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Daily {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: FeelsLike;
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: Temp;
  uvi: number;
  weather: Weather[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

interface FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

interface Minutely {
  dt: number;
  precipitation: number;
}

interface UseWeatherParams {
  lat: number;
  lon: number;
  lang?: string;
  appid?: string;
}

export const useWeatherOneCallQuery = ({ lat, lon }: UseWeatherParams) => {
  const [fetchData, requestStatus] = useWeatherApi<Response>("/onecall", {
    params: {
      lat,
      lon,
    },
  });

  useEffect(() => {
    if (lat && lon) {
      fetchData();
    }
  }, [lat, lon, fetchData]);

  return requestStatus;
};
