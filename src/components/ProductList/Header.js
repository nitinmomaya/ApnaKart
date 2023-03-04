import { useState } from "react";
import { FiAlignJustify, FiGrid } from "react-icons/fi";
import { useFilterProductContext } from "../../context/filterProductContext";
import Search from "../../UI/Search";

const Header = () => {
  const { setGridView, setListView } = useFilterProductContext();
  const [isGrid, setIsGrid] = useState(false);
  const [isList, setIsList] = useState(true);
  return (
    <>
      <div className="flex lg:flex-row flex-col justify-between items-center  space-y-4 w-full">
        <div className="lg:w-1/2 w-full space-y-2">
          <h1 className="font-display font-bold text-3xl text-slate-900 ">
            Find all products at a single place
          </h1>
          <p className="font-display text-lg text-slate-700 ">
            Explore products from different categories and filter products at
            your wish
          </p>
        </div>
        {/*SEARCH SECTION */}
        <div className=" lg:w-1/2 w-full flex lg:justify-end justify-between sm:item-center font-display">
          {/* SearchBar Start */}
          <Search />
          {/* SearchBar End */}

          {/* Change View Section */}
          <div className="pl-8 justify-end flex  items-center align-top  space-x-4">
            <button
              className={
                isGrid
                  ? " flex  p-2  bg-slate-700  border-[1px] rounded-md  "
                  : " flex  p-2  border-slate-200 border-[1px] rounded-md  "
              }
              onClick={() => {
                setGridView();
                setIsGrid(true);
                setIsList(false);
              }}
            >
              <FiGrid
                className={
                  isGrid
                    ? "sm:w-6 sm:h-6 w-4 h-4 text-white"
                    : "sm:w-6 sm:h-6 w-4 h-4 text-slate-700"
                }
              />
            </button>
            <button
              className={
                isList
                  ? " flex  p-2  bg-slate-700 text-white border-[1px] rounded-md  "
                  : " flex  p-2  border-slate-200 border-[1px] rounded-md  "
              }
              onClick={() => {
                setListView();
                setIsList(true);
                setIsGrid(false);
              }}
            >
              <FiAlignJustify
                className={
                  isList
                    ? "sm:w-6 sm:h-6 w-4 h-4 text-white"
                    : "sm:w-6 sm:h-6 w-4 h-4 text-slate-700"
                }
              />
            </button>
          </div>
          {/* Change View End */}
        </div>
      </div>
    </>
  );
};

export default Header;
