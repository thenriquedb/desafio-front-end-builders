/* eslint-disable no-undef */
import { useEffect, useState } from "react";

export const useGeolocation = (positionOptions = {} as PositionOptions) => {
  const [coordinates, setCoordinates] = useState<GeolocationCoordinates>({
    accuracy: 0,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: 0,
    longitude: 0,
    speed: null,
  });

  const [error, setError] = useState({} as GeolocationPositionError);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation not available for your browser");
    }
  }, []);

  useEffect(() => {
    const handleGeolocationSuccessCallback = (
      position: GeolocationPosition
    ) => {
      setCoordinates(position.coords);
    };

    const handleGeolocationErrorCallback = (
      geolocationPositionError: GeolocationPositionError
    ) => {
      setError(geolocationPositionError);
    };

    navigator.geolocation.getCurrentPosition(
      handleGeolocationSuccessCallback,
      handleGeolocationErrorCallback,
      positionOptions
    );
  }, []);

  return { coordinates, error };
};
