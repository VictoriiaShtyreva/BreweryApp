//Data type for brewery
export type Data = {
  id: string;
  name: string;
  brewery_type: string;
  address_1: string;
  address_2: string | null;
  address_3: string | null;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  longitude: string;
  latitude: string;
  phone: string;
  website_url: string;
  state: string;
  street: string;
};

//Props
export type Props = {
  breweries: Data[];
};

//Header and SearchBarProps
export type SearchBarProps = {
  onSearch: (query: string) => void;
};

//BreweryCardProps
export type BreweryCardProps = {
  brewery: Data;
};

//BreweryDetailProps
export type BreweryDetailProps = {
  id: string | undefined;
};
