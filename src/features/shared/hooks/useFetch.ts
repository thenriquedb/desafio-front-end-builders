import { useEffect, useState } from 'react'

export function useFetch<T = unknown>(
  url: string,
  requestOptions?: RequestInit,
  options = { skip: false }) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<{ error: Error }>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function fetchData() {
    try {
      setIsLoading(true);
      setIsError(false);
      if (options?.skip) return
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const parsed = await response.json() as T;
      setData(parsed);
      setIsSuccess(true);
    } catch (e) {
      setError({ error: e as Error });
      setIsError(true);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    data,
    error,
    isError,
    isLoading,
    isSuccess,
  }
}