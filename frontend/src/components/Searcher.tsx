import { useState, ChangeEventHandler } from "react";
import SearchIcon from "./SearchIcon";

const Searcher = () => {
  const [query, setQuery] = useState("");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log(query);
  };

  return (
    <div className="bg-stone-300 rounded-3xl p-2 flex justify-between items-center">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="w-5/6 bg-stone-300 outline-none px-2"
      />
      <button className="w-7 flex justify-end" onClick={handleSearch}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Searcher;
