import { FiAlignJustify, FiGrid, FiSearch } from "react-icons/fi";

import Dropdown from "../UI/Dropdown";
import ProductList from "../UI/ProductList";

const ProductLists = () => {
  return (
    <>
      <div className="pt-28 flex flex-col  sm:px-24 px-8">
        {/* header content */}
        <div className="flex justify-between items-center">
          <div className="w-1/2 space-y-2">
            <h1 className="font-display font-bold text-3xl text-slate-900 ">
              Find all products at a single place
            </h1>
            <p className="font-display text-lg text-slate-700 ">
              Explore products from different categories and filter products at
              your wish
            </p>
          </div>

          <div className=" w-1/2 flex justify-end item-center">
            <div className="relative w-1/2  flex items-center  bg-red-50 justify-end">
              <FiSearch className="absolute text-slate-400 w-5 h-5  pointer-events-none left-2 " />
              <input
                type="search"
                className="  border-slate-200 border-[1px]  bg-white text-slate-400 rounded-md  pl-8  py-2  w-full "
                placeholder="Search Mobile, Laptop, Accessories..."
              />
            </div>
            <div className="pl-8 justify-end flex  items-center space-x-4">
              <button
                className=" flex  p-2 border-slate-200 border-[1px] rounded-md  "
                // onClick={handleDecrease}
              >
                <FiAlignJustify className="w-6 h-6 text-slate-700" />
              </button>

              <button
                className=" flex  p-2 border-slate-200 border-[1px] rounded-md  "
                // onClick={handleIncrease}
              >
                <FiGrid className="w-6 h-6 text-slate-700" />
              </button>
            </div>
          </div>
        </div>

        {/* 2nd row content */}
        <div className="flex justify-between my-4  font-display">
          {/* filter options */}
          <div className=" flex w-1/5 flex-col   space-y-4 ">
            <div className=" font-display bg-white flex flex-col w-full py-4 px-2 space-y-2 border-slate-200 border-2 rounded-lg">
              <h1 className="font-semibold text-xl">Category</h1>
              <div>
                <ul className="font-display text-slate-600 text-base space-y-2">
                  <li></li>
                  <li>Show All Products</li>
                  <li>Mobile</li>
                  <li>laptop</li>
                  <li>Computer</li>
                  <li>Accessories</li>
                  <li>Watch</li>
                </ul>
              </div>
            </div>

            <div className=" font-display bg-white flex flex-col w-full py-4 px-2 space-y-2 border-slate-200 border-2 rounded-lg">
              <h1 className="font-semibold text-xl">Company</h1>
              <div>
                <Dropdown />
              </div>
            </div>

            <div className=" font-display bg-white flex flex-col w-full py-4 px-2 space-y-2 border-slate-200 border-2 rounded-lg">
              <h1 className="font-semibold text-xl">Colors</h1>
              <div className="flex">
                <div>
                  <h1 className="pr-4">All</h1>
                </div>
                <div className="flex space-x-4">
                  <button className="w-6 h-6  rounded-md bg-green-500"></button>
                  <button className="w-6 h-6  rounded-md bg-green-500"></button>
                  <button className="w-6 h-6  rounded-md bg-green-500"></button>
                  <button className="w-6 h-6  rounded-md bg-green-500"></button>
                  <button className="w-6 h-6  rounded-md bg-green-500"></button>
                </div>
              </div>
            </div>

            <div className=" font-display bg-white flex flex-col w-full py-4 px-2 space-y-2 border-slate-200 border-2 rounded-lg">
              <h1 className="font-semibold text-xl">Price</h1>
              <div>
                <h1>Price</h1>
              </div>
            </div>
          </div>
          {/* product display */}
          <div className="flex flex-col w-3/4  p-4 ">
            {/* Header Content for Product */}
            <div className="flex justify-between w-full my-2">
              <h1 className="font-display font-bold text-xl text-slate-900 ">
                12 Products Available
              </h1>
              <Dropdown />
            </div>
            {/* Product List Component -name, -description */}
            <ProductList />
            <ProductList />
            <ProductList />
            <ProductList />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductLists;
