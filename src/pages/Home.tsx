import { useState, useCallback, useEffect } from "react";
import { Alert, Box, Pagination } from "@mui/material";

import useFetch from "../hook/useFetch";
import { Data } from "../misc/type";
import Header from "../components/header/Header";
import BreweryList from "../components/brewery/BreweryList";
import Footer from "../components/footer/Footer";
import SortByType from "../components/brewery/SortByType";
import useFetchSort from "../hook/useFetchSort";
import ContactForm from "../components/form/ContactForm";
import useFetchName from "../hook/useFetchName";

//Endpoint for fetching all breweries
const url = "https://api.openbrewerydb.org/v1/breweries";

//BoxStyles
const boxStyles = {
  width: "100%",
  maxWidth: "500px",
  textAlign: "center",
  p: 2,
};

const Home = () => {
  //Fetch data for default list of breweries
  const { loading: defaultLoading, error: defaultError } = useFetch<Data>(url);
  //State for query
  const [searchQuery, setSearchQuery] = useState("");
  // Fetch data based on search query
  const { data, loading, error } = useFetchName(searchQuery);
  //Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  //Pagination logic
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  //Sort logic
  const [sortByType, setSortByType] = useState("all");
  const { dataSort, loadingSort, errorSort } = useFetchSort({
    type: sortByType,
    page: currentPage,
  });

  //Callback function to handle sort by type
  const handleSortByType = useCallback((type: string) => {
    setSortByType(type);
    setCurrentPage(1);
  }, []);

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

  let breweriesToShow: Data[] = [];
  if (searchQuery && !loading && !error) {
    breweriesToShow = data;
  } else if (sortByType && !loadingSort && !errorSort) {
    breweriesToShow = dataSort;
  }

  return (
    <>
      <Header onSearch={handleSearch} />
      <SortByType onSelectSortByType={handleSortByType} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          p: 2,
        }}
      >
        {loading || loadingSort || defaultLoading ? (
          <Box sx={boxStyles}>
            <Alert variant="outlined" severity="info">
              Loading breweries...
            </Alert>
          </Box>
        ) : error || errorSort || defaultError ? (
          <Box sx={boxStyles}>
            <Alert variant="outlined" severity="error">
              Error fetching breweries: {error || errorSort || defaultError}
            </Alert>
          </Box>
        ) : (
          <>
            <BreweryList breweries={breweriesToShow} />
            <Box
              sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
            >
              <Pagination
                count={8}
                color="primary"
                page={currentPage}
                onChange={handlePageChange}
              />
            </Box>
            <ContactForm />
          </>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default Home;
