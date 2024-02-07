import useFetch from "../hook/useFetch";
import BreweryList from "../components/BreweryList";
import { Data } from "../misc/type";
import { Box } from "@mui/material";

//Returns a list of breweries
const url = "https://api.openbrewerydb.org/v1/breweries";

const Home = () => {
  const { data, loading, error } = useFetch<Data>(url);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: 2,
      }}
    >
      {loading ? (
        <p>Loading breweries...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <BreweryList breweries={data} />
      )}
    </Box>
  );
};

export default Home;
