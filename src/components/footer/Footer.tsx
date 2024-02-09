import { Box, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 2,
        color: "white",
      }}
    >
      <Link href="https://www.openbrewerydb.org/" underline="none">
        This project is powered by Open Brewery DB api
      </Link>
      <Link href="https://github.com/VictoriiaShtyreva" underline="none">
        Author: Viktoriia Shtyreva
      </Link>
    </Box>
  );
};

export default Footer;
