import { useEffect, useState } from "react";
import { FiAlignJustify, FiGrid, FiSearch } from "react-icons/fi";
import img from "../assest/Apple-Mobile.jpg";
import { useFilterProductContext } from "../context/filterProductContext";
import Button from "../UI/Button";

import Dropdown from "../UI/Dropdown";
import ProductCard from "../UI/ProductCard";
import ProductList from "../UI/ProductList";
import Category from "./filters/Category";
import Colors from "./filters/Colors";
import Company from "./filters/Company";
import Price from "./filters/Price";

const ProductLists = () => {
  const [listView, setListView] = useState(true);

  const { filterProduct } = useFilterProductContext();
  console.log("filter", filterProduct);
  //to load page from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleListView = () => {
    setListView(true);
  };
  const handleCardView = () => {
    setListView(false);
  };
  return (
    <>
      <div className="pt-28 flex flex-col  md:px-24 px-8">
        {/* header content */}
        <div className="flex lg:flex-row flex-col justify-between items-center space-y-4 w-full">
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
          <div className=" lg:w-1/2 w-full flex lg:justify-end justify-between item-center font-display">
            {/* SearchBar Start */}
            <div className="relative lg:w-1/2 w-full  flex items-center  justify-end">
              <FiSearch className="absolute text-slate-400 sm:w-6 sm:h-6 w-4 h-4  pointer-events-none left-3 " />
              <input
                type="search"
                className="  border-slate-200 border-[1px]  bg-white sm:text-base text-xs text-slate-400 rounded-md pl-12  py-3  w-full "
                placeholder="Search Mobile, Laptop, Accessories..."
              />
            </div>
            {/* SearchBar End */}

            {/* Change View Section */}
            <div className="pl-8 justify-end flex  items-center space-x-4">
              <button
                className=" flex  p-2 border-slate-200 border-[1px] rounded-md  "
                onClick={handleCardView}
              >
                <FiGrid className="sm:w-6 sm:h-6 w-4 h-4 text-slate-700" />
              </button>
              <button
                className=" flex  p-2 border-slate-200 border-[1px] rounded-md  "
                onClick={handleListView}
              >
                <FiAlignJustify className="sm:w-6 sm:h-6 w-4 h-4 text-slate-700" />
              </button>
            </div>
            {/* Change View End */}
          </div>
        </div>

        {/* 2nd row content */}
        <div className="flex flex-col lg:flex-row lg:justify-between my-4  font-display">
          {/* filter options */}
          <div className=" flex lg:w-1/5 w-full flex-col   space-y-4 ">
            <Category />
            <Company />
            <Colors />
            <Price />
            <Button name={"Clear Filter"} />
          </div>
          {/* product display */}
          <div className="flex flex-col lg:w-3/4 w-full  lg:px-4 py-4 my-4">
            {/* Header Content for Product */}
            <div className="flex justify-between w-full my-2 items-center">
              <h1 className="font-display font-bold text-2xl text-slate-900 ">
                {filterProduct.length} Products Available
              </h1>
              <Dropdown />
            </div>
            {/* Product List Component -name, -description */}
            <div className="w-full">
              {listView ? (
                filterProduct.map((filter) => (
                  <ProductList
                    productName={filter.name}
                    price={filter.price}
                    id={filter.id}
                    description={filter.description}
                    img={filter.image}
                  />
                ))
              ) : (
                <div className="flex flex-wrap justify-between">
                  {filterProduct.map((filter) => (
                    <ProductCard
                      key={filter.id}
                      productName={filter.name}
                      companyName={filter.company}
                      price={filter.price}
                      img={filter.image}
                      id={filter.id}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductLists;
