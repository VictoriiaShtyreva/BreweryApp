import {
  CardContent,
  Typography,
  Chip,
  Button,
  Card,
  Box,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import { BreweryCardProps } from "../../misc/type";
import { Link } from "react-router-dom";

const BreweryCard = ({ brewery }: BreweryCardProps) => {
  return (
    <Card sx={{ width: "100%", height: "100%", bgcolor: "#f1b450" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h6">{brewery.name}</Typography>
        <Chip
          label={brewery.brewery_type}
          variant="outlined"
          color={brewery.brewery_type === "closed" ? "error" : "primary"}
          sx={{ mb: 1 }}
        />
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <PlaceIcon fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body2">{brewery.address_1}</Typography>
        </Box>
        <Link to={`/breweries/${brewery.id}`}>
          <Button variant="outlined">View Details</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default BreweryCard;
