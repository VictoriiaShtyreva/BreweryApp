import { useState } from "react";
import useFetch from "../hook/useFetch";
import BreweryList from "../components/BreweryList";
import { Data } from "../misc/type";

//Returns a list of breweries
const url = "https://api.openbrewerydb.org/v1/breweries";

const Home = () => {
  const { data, loading, error } = useFetch<Data>(url);

  return (
    <div>
      <div>
        {loading ? (
          <p>Loading breweries...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <BreweryList breweries={data} />
        )}
      </div>
    </div>
  );
};

export default Home;
