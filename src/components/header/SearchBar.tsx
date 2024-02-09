import { useState, useEffect } from "react";
import {
  TextField,
  Box,
  InputAdornment,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Alert,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { Data, SearchBarProps } from "../../misc/type";
import useFetchByName from "../../hook/useFetchByName";

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Data[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { data: suggestionsData, loading, error } = useFetchByName(searchQuery);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    //Show suggestions on input change
    setShowSuggestions(true);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
    setSearchQuery("");
    //Hide suggestions after search
    setShowSuggestions(false);
  };

  useEffect(() => {
    if (!loading && !error) {
      const filteredSuggestions = suggestionsData.filter((brewery) => {
        return brewery.name.toLowerCase().includes(searchQuery.toLowerCase());
      });
      setSuggestions(filteredSuggestions);
    }
  }, [suggestionsData, loading, error, searchQuery]);

  const handleClickSuggestion = (brewery: Data) => {
    setSearchQuery(brewery.name);
    onSearch(brewery.name);
    setShowSuggestions(false);
  };

  const handleBlur = () => {
    //Hide suggestions after a short timeout without interaction
    setTimeout(() => setShowSuggestions(false), 300);
  };

  const renderSuggestion = (brewery: Data) => {
    return (
      <ListItem
        key={brewery.id}
        sx={{
          cursor: "pointer",
          backgroundColor: brewery.name === searchQuery ? "#ccc" : "white",
        }}
        onClick={() => handleClickSuggestion(brewery)}
      >
        <ListItemText primary={brewery.name} />
      </ListItem>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        maxWidth: "250px",
        position: "relative",
      }}
    >
      <TextField
        label="Search by Name"
        variant="outlined"
        value={searchQuery}
        onChange={handleInputChange}
        onBlur={handleBlur}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {showSuggestions && suggestions.length > 0 && (
        <List
          sx={{
            maxHeight: "calc(50vh - 30px)",
            overflowY: "auto",
            background: "white",
            border: "1px solid #ccc",
            padding: 1,
            position: "absolute",
            zIndex: 1,
            top: "5rem",
          }}
        >
          {suggestions.map(renderSuggestion)}
          {loading && (
            <Alert variant="outlined" severity="info">
              Loading suggestions...
            </Alert>
          )}
          {error && (
            <Alert variant="outlined" severity="error">
              Error fetching suggestions: {error}
            </Alert>
          )}
        </List>
      )}
    </Box>
  );
};

export default SearchBar;
