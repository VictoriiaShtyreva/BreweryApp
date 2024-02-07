import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

export default function useFetch<T>(url: string) {
  //States for data, loading, error
  const [data, setData] = useState<T[]>([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setIsError] = useState("");

  //useEffect for fetch data
  useEffect(() => {
    axios
      .get(url)
      .then((response: AxiosResponse) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error: AxiosError) => {
        setIsError(error.message);
        setIsLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}
