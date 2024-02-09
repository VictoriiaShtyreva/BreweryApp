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

//SearchBarProps
export type SearchBarProps = {
  onSearch: (query: string) => void;
};

//SortByTypeProps
export type SortByTypeProps = {
  onSelectSortByType: (type: string) => void;
};

//BreweryCardProps
export type BreweryCardProps = {
  brewery: Data;
};

//BreweryDetailProps
export type BreweryDetailProps = {
  id: string | undefined;
};

//SortFetchParams
export type SortFetchParams = {
  type?: string;
  page?: number;
};

//Form
export type Form = {
  username: string;
  email: string;
  phone?: string;
  feedback: string;
};
