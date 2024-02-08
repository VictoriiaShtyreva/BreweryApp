import SearchBar from "./SearchBar";
import { SearchBarProps } from "../../misc/type";

const Header = ({ onSearch }: SearchBarProps) => {
  return (
    <header>
      <SearchBar onSearch={onSearch} />
    </header>
  );
};

export default Header;
