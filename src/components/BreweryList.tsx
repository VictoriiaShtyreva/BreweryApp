import { Props } from "../misc/type";
import { Card, CardContent, Typography, Link } from "@mui/material";

const BreweryList = ({ breweries }: Props) => {
  return (
    <div>
      {breweries.map((brewery) => (
        <Card key={brewery.id}>
          <CardContent>
            <Typography variant="h5">{brewery.name}</Typography>
            <Typography variant="body2">{brewery.brewery_type}</Typography>
            <Typography variant="body2">
              {brewery.city}, {brewery.state}
            </Typography>
            <Link href={brewery.website_url} target="_blank" underline="none">
              Visit Website
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BreweryList;
