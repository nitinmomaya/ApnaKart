import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { useFilterProductContext } from "../../context/filterProductContext";
import { useProductContext } from "../../context/productContext";

const Colors = () => {
  const { products } = useProductContext();

  const { filterType } = useFilterProductContext();

  const colors = products.map((col) => col.colors);

  // const filtercolors = ["all", ...new Set([].concat(...colors))];
  const allcolors = colors.flat();

  const filtercolors = [...new Set(allcolors)];

  const [col, setCol] = useState(filtercolors[0]);

  console.log("filtercolors", filtercolors);
  return (
    <>
      <div className=" font-display bg-white flex flex-col w-full pt-4 px-2 space-y-2 border-slate-200 border-[1px] rounded-lg">
        <h1 className="font-semibold text-xl text-slate-700 ml-2">Colors</h1>

        <div className="flex flex-wrap py-2  items-center ">
          <button
            className={
              col === "all"
                ? "w-8 h-8 rounded-md ml-2 mt-2 bg-slate-700 flex items-center justify-center text-white "
                : "w-8 h-8 rounded-md ml-2 mt-2 border-slate-200 border-[1px] text-slate-700"
            }
            onClick={() => {
              setCol("all");
              filterType("color", "all");
            }}
          >
            All
          </button>

          {filtercolors.map((color, index) => (
            <button
              key={index}
              style={{ backgroundColor: color }}
              className={
                col === color
                  ? "w-8 h-8 rounded-md  flex items-center justify-center ml-2 mt-2 "
                  : "w-8 h-8 rounded-md ml-2 mt-2"
              }
              onClick={() => {
                filterType("color", color);
                setCol(color);
              }}
            >
              {col === color ? (
                <FiCheck className=" text-white w-5 h-5" />
              ) : null}
            </button>
          ))}
          <button
            onClick={() => {
              filterType("color", value);
            }}
            className="w-6 h-6  rounded-md "
          ></button>
        </div>
      </div>
    </>
  );
};

export default Colors;
