import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { Data } from "../misc/type";

const useFetchbyName = (name: string) => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setIsError] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.openbrewerydb.org/v1/breweries?by_name=${name}`)
      .then((response: AxiosResponse) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error: AxiosError) => {
        setIsError(error.message);
        setIsLoading(false);
      });
  }, [name]);

  return { data, loading, error };
};

export default useFetchbyName;
