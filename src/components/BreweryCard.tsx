import {
  CardContent,
  Typography,
  Chip,
  Button,
  Card,
  Box,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import { Data } from "../misc/type";

const BreweryCard = ({ brewery }: { brewery: Data }) => {
  return (
    <Card>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          padding: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <SportsBarIcon fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="h6">{brewery.name}</Typography>
        </Box>
        <Chip label={brewery.brewery_type} variant="outlined" sx={{ mb: 1 }} />
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <PlaceIcon fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body2">{brewery.address_1}</Typography>
        </Box>
        <Button href={brewery.website_url} target="_blank" sx={{ mt: 1 }}>
          Visit Website
        </Button>
      </CardContent>
    </Card>
  );
};

export default BreweryCard;
