import { FiSearch } from "react-icons/fi";
import { useThemeStore } from "../../store/store";

const Search = ({ refetch, setSearchValue }) => {
  const themeStore = useThemeStore();

  const { themeMode } = themeStore;

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      refetch();
    }
  };

  return (
    <div className="mt-10  relative">
      <input
        type="text"
        placeholder="Search for any word..."
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        className={`p-5 w-full font-medium focus:outline-none rounded-md text-black placeholder:text-black`}
      />

      <div className="absolute right-5 top-5 flex justify-center h-full cursor-pointer">
        <FiSearch
          className={`${
            themeMode === "dark" ? "text-dark-100" : "text-light-300"
          }`}
          size={30}
        />
      </div>
    </div>
  );
};

export default Search;
