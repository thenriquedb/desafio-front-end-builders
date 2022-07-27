import { createContext, PropsWithChildren } from "react";

import { useGeolocation } from "@features/shared/hooks/useGeolocation";

export interface OpenWeatherContextValues {
  lat: number;
  lon: number;
}

const OpenWeatherContext = createContext({} as OpenWeatherContextValues);

type State = {
  location: {
    city: string;
    lon: number;
    lat: number;
  };

  weather: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
};

export function OpenWeatherProvider({ children }: PropsWithChildren<void>) {
  const { coordinates } = useGeolocation();

  return (
    <OpenWeatherContext.Provider
      value={{
        lat: coordinates?.latitude,
        lon: coordinates.longitude,
      }}
    >
      {children}
    </OpenWeatherContext.Provider>
  );
}
