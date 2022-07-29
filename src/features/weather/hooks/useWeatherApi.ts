import api from "@features/weather/services/api";
import { AxiosRequestConfig } from "axios";
import { useCallback, useState } from "react";

export type UseWeatherApi<T = unknown> = [
  () => Promise<void>,
  {
    data?: T;
    error: { message?: string };
    isError: boolean;
    isLoading: boolean;
    isSuccess: boolean;
  }
];

export function useWeatherApi<T = unknown>(
  endpoint: string,
  config?: AxiosRequestConfig<T>
): UseWeatherApi<T> {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<{ message?: string }>({ message: "" });
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(endpoint, config);
      setData(response.data as T);
      setIsSuccess(true);
    } catch (e) {
      setIsError(true);
      setError({ message: (e as Error).message });
    } finally {
      setIsLoading(false);
    }
  }, [endpoint, JSON.stringify(config)]);

  return [
    fetchData,
    {
      data,
      error,
      isError,
      isLoading,
      isSuccess,
    },
  ];
}
