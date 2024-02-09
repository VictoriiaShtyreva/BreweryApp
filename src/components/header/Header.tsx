import { memo } from "react";
import { Box, Typography } from "@mui/material";

import SearchBar from "./SearchBar";
import { SearchBarProps } from "../../misc/type";

const Header = ({ onSearch }: SearchBarProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, p: 2 }}>
      <Typography variant="h3">Brewery App</Typography>
      <SearchBar onSearch={onSearch} />
    </Box>
  );
};

export default memo(Header);
