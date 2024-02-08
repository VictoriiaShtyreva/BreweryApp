import { useState, useCallback, useEffect } from "react";
import useFetch from "../hook/useFetch";
import useFetchbyName from "../hook/useFetchbyName";
import { Data } from "../misc/type";
import { Alert, Box } from "@mui/material";
import Header from "../components/header/Header";
import BreweryList from "../components/brewery/BreweryList";
import Footer from "../components/footer/Footer";

//Endpoint for fetching all breweries
const url = "https://api.openbrewerydb.org/v1/breweries";

const Home = () => {
  //Fetch data for default list of breweries
  const {
    data: defaultData,
    loading: defaultLoading,
    error: defaultError,
  } = useFetch<Data>(url);
  const [searchQuery, setSearchQuery] = useState("");
  // Fetch data based on search query
  const { data, loading, error } = useFetchbyName(searchQuery);

  //Callback function to handle search queries
  const handleSearch = useCallback((query: any) => {
    setSearchQuery(query);
  }, []);

  //Clear search query when it becomes empty
  useEffect(() => {
    if (!searchQuery) {
      setSearchQuery("");
    }
  }, [searchQuery]);

  return (
    <>
      <Header onSearch={handleSearch} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          padding: 2,
        }}
      >
        {loading || defaultLoading ? (
          <Box
            sx={{
              width: "100%",
              maxWidth: "500px",
              textAlign: "center",
              padding: 2,
            }}
          >
            <Alert variant="outlined" severity="info">
              Loading breweries...
            </Alert>
          </Box>
        ) : error ? (
          <Box
            sx={{
              width: "100%",
              maxWidth: "500px",
              textAlign: "center",
              padding: 2,
            }}
          >
            <Alert variant="outlined" severity="error">
              Error fetching breweries: {error || defaultError}
            </Alert>
          </Box>
        ) : (
          <BreweryList breweries={data || defaultData} />
        )}
      </Box>
      <Footer />
    </>
  );
};

export default Home;
