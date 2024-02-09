import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

import { SortByTypeProps } from "../../misc/type";

const SortByType = ({ onSelectSortByType }: SortByTypeProps) => {
  const handleTypeChange = (event: { target: { value: string } }) => {
    onSelectSortByType(event.target.value);
  };

  return (
    <FormControl sx={{ p: 2 }}>
      <InputLabel>Sort By Type</InputLabel>
      <Select
        label="Sort By Type"
        onChange={handleTypeChange}
        defaultValue="micro"
      >
        <MenuItem value="micro">Micro</MenuItem>
        <MenuItem value="nano">Nano</MenuItem>
        <MenuItem value="regional">Regional</MenuItem>
        <MenuItem value="brewpub">Brewpub</MenuItem>
        <MenuItem value="large">Large</MenuItem>
        <MenuItem value="planning">Planning</MenuItem>
        <MenuItem value="bar">Bar</MenuItem>
        <MenuItem value="contract">Contract</MenuItem>
        <MenuItem value="proprietor">Proprietor</MenuItem>
        <MenuItem value="closed">Closed</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortByType;
