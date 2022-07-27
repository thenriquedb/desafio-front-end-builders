import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_MAP_KEY

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

export interface Current {
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

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Daily {
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

export interface FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface Minutely {
  dt: number;
  precipitation: number;
}

interface UseOpenWeatherOptions {
  lat: number,
  lon: number,
  lang?: string;
  appid?: string;
}

export const useOpenWeather = ({ appid = API_KEY, ...options }: UseOpenWeatherOptions) => {
  const [data, setData] = useState({} as Response)

  const baseUrl = `https://api.openweathermap.org/data/2.5/onecall`

  function concatQueryParams() {
    return Object.entries({ ...options, appid })
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
  }

  function urlWithQueryParams() {
    const queryParams = concatQueryParams();
    return `${baseUrl}?${queryParams}`;
  }

  async function fetchWeather() {
    const url = urlWithQueryParams();
    const response = await fetch(url);
    const parsed = await response.json();

    setData(parsed as Response);
  }

  const hash = JSON.stringify(options)
  useEffect(() => {
    if (options.lat && options?.lon) {
      fetchWeather();
    }
  }, [hash]);

  return { data };
}