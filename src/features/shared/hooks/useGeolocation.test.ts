import { renderHook } from "@testing-library/react";

import { useGeolocation } from "./useGeolocation";

describe("useGeolocation", () => {
  it("should update return coordinates correctly", () => {
    const mockPosition: GeolocationPosition = {
      coords: {
        latitude: -20.2915098,
        longitude: -45.520122,
        accuracy: 24,
        heading: 90,
        speed: 0,
        altitude: 12,
        altitudeAccuracy: 24,
      },
      timestamp: 1561815013194,
    };

    const mockGeolocation = {
      getCurrentPosition: (successCallBack: any) =>
        successCallBack(mockPosition),
    };

    Object.assign(global.navigator, { geolocation: mockGeolocation });

    const { result } = renderHook(() => useGeolocation());

    expect(result.current.coordinates).toEqual(mockPosition.coords);
    expect(result.current.error).toEqual({});
  });

  it("should update return coordinates correctly", () => {
    const positionError: GeolocationPositionError = {
      code: 12,
      message: "any_message",
      PERMISSION_DENIED: 1,
      POSITION_UNAVAILABLE: 0,
      TIMEOUT: 0,
    };

    const mockGeolocation = {
      getCurrentPosition: (_: any, errorCallback: any) =>
        errorCallback(positionError),
    };

    Object.assign(global.navigator, { geolocation: mockGeolocation });

    const { result } = renderHook(() => useGeolocation());

    expect(result.current.error).toEqual(positionError);
  });
});
