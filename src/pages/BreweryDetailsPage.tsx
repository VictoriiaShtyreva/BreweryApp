import { useState, useEffect } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { Box, Breadcrumbs, Grid, Typography, Link } from "@mui/material";
import { Data } from "../misc/type";

const BreweryDetails = () => {
  const { id } = useParams();
  const [breweryDetails, setBreweryDetails] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.openbrewerydb.org/v1/breweries/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      setBreweryDetails(data);
    };
    fetchData();
  }, [id]);

  if (breweryDetails === null) {
    return <Typography variant="h5">Loading brewery details...</Typography>;
  }

  if (!breweryDetails) {
    return <Typography variant="h5">No brewery found with ID: {id}</Typography>;
  }

  return (
    <Box sx={{ width: "100%", height: "100%", padding: 2 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          component={RouterLink}
          sx={{ textDecoration: "none" }}
          color="inherit"
          to="/brewery"
        >
          Home
        </Link>
        <Typography color="textPrimary">{breweryDetails.name}</Typography>
      </Breadcrumbs>
      <Typography sx={{ mb: 2 }} variant="h4">
        {breweryDetails.name}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">Type:</Typography>
          <Typography variant="body2">{breweryDetails.brewery_type}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">Address:</Typography>
          <Typography variant="body1">
            {breweryDetails.address_1}
            {breweryDetails.address_2 && `, ${breweryDetails.address_2}`}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">Phone:</Typography>
          <Typography variant="body1">{breweryDetails.phone}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">Website:</Typography>
          <a href={breweryDetails.website_url} target="_blank">
            <Typography variant="body1">
              {breweryDetails.website_url}
            </Typography>
          </a>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">City:</Typography>
          <Typography variant="body1">{breweryDetails.city}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">State/Province:</Typography>
          <Typography variant="body1">
            {breweryDetails.state_province}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">Postal Code:</Typography>
          <Typography variant="body1">{breweryDetails.postal_code}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BreweryDetails;
