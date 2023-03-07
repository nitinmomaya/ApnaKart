import { lazy, Suspense } from "react";
import { useFilterProductContext } from "../../context/filterProductContext";
import Shimmer from "../shimmer/Shimmer";

const Dropdown = lazy(() => import("../../UI/Dropdown"));
const HeaderProduct = () => {
  const { filterProduct } = useFilterProductContext();
  return (
    <>
      <div className="flex justify-between w-full my-2 md:items-center md:flex-row flex-col">
        <h1 className="font-display font-bold text-2xl text-slate-900 w-3/4 ">
          {filterProduct.length} Products Available
        </h1>
        <div className="lg:w-1/4 sm:w-1/2  w-full py-2">
          <Suspense fallback={<Shimmer />}>
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
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default HeaderProduct;
