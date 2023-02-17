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
      <div className=" font-display bg-white flex flex-col w-full py-4 px-2 space-y-2 border-slate-200 border-[1px] rounded-lg">
        <h1 className="font-semibold text-xl text-slate-700">Colors</h1>

        <div className="flex flex-wrap md:space-x-4 space-x-2 space-y-2 items-center">
          <h1 className="-mx-2"></h1>
          {/* <h1 className="w-6 h-6 flex items-center justify-center">All</h1> */}
          <button
            className={
              col === "all"
                ? "w-6 h-6 rounded-md bg-slate-700 flex items-center justify-center text-white"
                : "w-6 h-6 rounded-md border-slate-200 border-[1px] text-slate-700"
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
                  ? "w-6 h-6 rounded-md  flex items-center justify-center"
                  : "w-6 h-6 rounded-md"
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
