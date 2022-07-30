import {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useContext,
  useState,
} from "react";

export enum Unit {
  Celsius = "C",
  Fahrenheit = "F",
}

export interface WeatherContextValues {
  unit: Unit;
  onChangeCelsius: () => void;
  onChangeFahrenheit: () => void;
  formatTemperature: (temperature: number) => string;
}

const WeatherContext = createContext({} as WeatherContextValues);

export function WeatherProvider({ children }: PropsWithChildren<{}>) {
  const [unit, setUnit] = useState(Unit.Celsius);

  function celsiusToFahrenheit(celsius: number) {
    return celsius * 1.8 + 32;
  }

  const formatTemperature = useCallback(
    (temperature: number) => {
      if (unit === Unit.Celsius) {
        const rounded = Math.round(temperature).toFixed();
        return `${rounded}°C`;
      }

      const fahrenheit = celsiusToFahrenheit(temperature);
      const rounded = Math.round(fahrenheit).toFixed();
      return `${rounded}°F`;
    },
    [unit]
  );

  function onChangeCelsius() {
    setUnit(Unit.Celsius);
  }

  function onChangeFahrenheit() {
    setUnit(Unit.Fahrenheit);
  }

  const values = useMemo(
    () => ({
      unit,
      setUnit,
      formatTemperature,
      onChangeCelsius,
      onChangeFahrenheit,
    }),
    [unit, setUnit, formatTemperature]
  );

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
}

export const useWeatherContext = () => useContext(WeatherContext);
