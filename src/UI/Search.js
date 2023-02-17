import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useFilterProductContext } from "../context/filterProductContext";

const Search = () => {
  const [value, setValue] = useState("");
  const { filterType } = useFilterProductContext();

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      filterType("search", value);
      setValue("");
    }
  };
  return (
    <>
      <div className="flex w-full  flex-row  sm:justify-end sm:space-x-4 ">
        <div className="relative lg:w-1/2 w-full flex items-center  justify-end">
          <FiSearch className="absolute text-slate-400 sm:w-6 sm:h-6 w-4 h-4  pointer-events-none left-3  " />
          <input
            type="search"
            className="  border-slate-200 border-[1px]  bg-white lg:text-base text-xs text-slate-400 rounded-md pl-12 pr-2  py-3  w-full focus:text-slate-700 focus:text-lg focus:font-normal font-normal font-display focus:bg-white focus:border-slate-400 focus:outline-none"
            placeholder="Search Mobile, Laptop, Accessories..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
            onKeyDown={handleSubmit}
          />
        </div>
        <button
          className="px-4  py-2 sm:h-full sm:my-0 my-4 mx-0 h-auto items-center justify-center flex  w-auto ml-3 bg-slate-700 text-white font-display font-semibold rounded-md "
          onClick={() => {
            filterType("search", value);
            setValue("");
          }}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
