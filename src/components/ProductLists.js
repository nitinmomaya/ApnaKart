import { useEffect, useState } from "react";
import { FiAlignJustify, FiGrid, FiSearch } from "react-icons/fi";
import { useFilterProductContext } from "../context/filterProductContext";
import Button from "../UI/Button";

import Dropdown from "../UI/Dropdown";
import ProductCard from "../UI/ProductCard";
import ProductList from "../UI/ProductList";
import Search from "../UI/Search";
import Category from "./filters/Category";
import Colors from "./filters/Colors";
import Company from "./filters/Company";
import Price from "./filters/Price";

const ProductLists = () => {
  const { filterProduct, listView, setGridView, setListView, clearFilter } =
    useFilterProductContext();
  console.log("filter", filterProduct, "LIST", listView);
  //to load page from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="pt-28 flex flex-col  xl:px-24 px-8 ">
        {/* header content */}
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
                className=" flex  p-2  border-slate-200 border-[1px] rounded-md  "
                onClick={setGridView}
              >
                <FiGrid className="sm:w-6 sm:h-6 w-4 h-4 text-slate-700" />
              </button>
              <button
                className=" flex  p-2 border-slate-200 border-[1px] rounded-md  "
                onClick={setListView}
              >
                <FiAlignJustify className="sm:w-6 sm:h-6 w-4 h-4 text-slate-700" />
              </button>
            </div>
            {/* Change View End */}
          </div>
        </div>

        {/* 2nd row content */}
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between my-4  font-display">
          {/* filter options */}
          <div className=" flex lg:w-1/5 w-full flex-col   space-y-4 ">
            <Category />
            <Company />
            <Colors />
            <Price />
            <Button name={"Clear Filter"} handle={clearFilter} />
          </div>
          {/* product display */}
          <div className="flex flex-col lg:w-3/4 w-full   ">
            {/* Header Content for Product */}
            <div className="flex justify-between w-full my-2 md:items-center md:flex-row flex-col">
              <h1 className="font-display font-bold text-2xl text-slate-900 w-3/4 ">
                {filterProduct.length} Products Available
              </h1>
              <div className="lg:w-1/4 sm:w-1/2  w-full py-2">
                <Dropdown
                  name={"Sort By:"}
                  options={[
                    { name: " Show All", value: "all" },
                    { name: "Price: High to Low", value: "highest" },
                    { name: "Price: Low to High", value: "lowest" },
                    { name: "Sort: A to Z", value: "lowest-A-Z" },
                    { name: "Sort: Z to A", value: "highest-A-Z" },
                  ]}
                />
              </div>
            </div>
            {/* Product List Component -name, -description */}
            {filterProduct.length === 0 ? (
              <div className=" flex justify-center items-center w-full h-full">
                <h1>NO PROD FOUND</h1>
              </div>
            ) : (
              <div className="w-full">
                {listView ? (
                  filterProduct.map((filter) => (
                    <ProductList
                      key={filter.id}
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
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductLists;
