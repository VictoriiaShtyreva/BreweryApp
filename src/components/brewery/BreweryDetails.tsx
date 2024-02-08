import { Link as RouterLink } from "react-router-dom";
import { Box, Breadcrumbs, Grid, Typography, Link } from "@mui/material";
import { BreweryDetailProps, Data } from "../../misc/type";
import useFetch from "../../hook/useFetch";
import googleMapsUrl from "../../misc/utils";

const BreweryDetails = ({ id }: BreweryDetailProps) => {
  const url = `https://api.openbrewerydb.org/v1/breweries/${id}`;
  const { data } = useFetch<Data>(url);

  return (
    <Box sx={{ width: "50vw", height: "50vh", padding: 2 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          component={RouterLink}
          sx={{ textDecoration: "none" }}
          color="inherit"
          to="/breweries"
        >
          Home
        </Link>
        <Typography color="textPrimary">{data?.name}</Typography>
      </Breadcrumbs>
      <Typography sx={{ mb: 2 }} variant="h4">
        {data?.name}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">Type:</Typography>
          <Typography variant="body2">{data?.brewery_type}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">Address:</Typography>
          <Typography variant="body1">
            {data?.address_1}
            {data?.address_2 && `, ${data?.address_2}`}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">Phone:</Typography>
          <Typography variant="body1">{data?.phone}</Typography>
        </Grid>
        {data?.website_url && (
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Website:</Typography>
            <Link underline="hover" href={data?.website_url} target="_blank">
              <Typography variant="body1">{data?.website_url}</Typography>
            </Link>
          </Grid>
        )}
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">City:</Typography>
          <Typography variant="body1">{data?.city}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">State/Province:</Typography>
          <Typography variant="body1">{data?.state_province}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">Postal Code:</Typography>
          <Typography variant="body1">{data?.postal_code}</Typography>
        </Grid>
        {data?.latitude && data?.latitude && (
          <Grid item xs={12} sm={6}>
            <Link
              href={googleMapsUrl(data?.latitude, data?.longitude)}
              underline="hover"
              target="_blank"
            >
              <Typography variant="subtitle1">
                View Brewery On Google Map
              </Typography>
            </Link>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default BreweryDetails;
