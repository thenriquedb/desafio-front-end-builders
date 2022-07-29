import { act, renderHook } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";

import api from "../services/api";
import { useWeatherApi } from "./useWeatherApi";

const mock = new MockAdapter(api);

describe("useWeatherApi", () => {
  beforeEach(() => {
    mock.reset();
  });

  it("should return default values correctly", () => {
    const { result } = renderHook(() => useWeatherApi("/weather"));

    const [trigger, hookResult] = result.current;

    expect(typeof trigger).toBe("function");
    expect(hookResult).toEqual({
      data: undefined,
      error: { message: "" },
      isError: false,
      isLoading: false,
      isSuccess: false,
    });
  });

  it("should update state with correct values after request successfully", async () => {
    const endpoint = "/weather";
    const response = { foo: "bar" };
    mock.onGet("/weather").reply(200, response);

    const { result } = renderHook(() => useWeatherApi(endpoint));
    const trigger = result.current[0];

    await act(async () => trigger());
    const hookResult = result.current[1];

    expect(hookResult).toEqual({
      data: response,
      error: { message: "" },
      isError: false,
      isLoading: false,
      isSuccess: true,
    });
  });

  it("should update state with correct values after request reject", async () => {
    const endpoint = "/weather";
    mock.onGet("/weather").reply(400);

    const { result } = renderHook(() => useWeatherApi(endpoint));
    const trigger = result.current[0];

    await act(async () => trigger());
    const hookResult = result.current[1];

    expect(hookResult).toEqual({
      data: undefined,
      error: { message: "Request failed with status code 400" },
      isError: true,
      isLoading: false,
      isSuccess: false,
    });
  });
});
