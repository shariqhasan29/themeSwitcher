import { useEffect, useState } from "react";

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export const useFetch = <T>(url: string) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = async () => {
    try {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      setState({ data: json, loading: false, error: null });
    } catch (err) {
      setState({
        data: null,
        loading: false,
        error: err instanceof Error ? err.message : "Unknown error",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { ...state, refetch: fetchData };
};
