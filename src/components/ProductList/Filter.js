import { lazy, Suspense } from "react";
import { useFilterProductContext } from "../../context/filterProductContext";
import Shimmer from "../shimmer/Shimmer";

const Button = lazy(() => import("../../UI/Button"));
const Category = lazy(() => import("../filters/Category"));
const Colors = lazy(() => import("../filters/Colors"));
const Company = lazy(() => import("../filters/Company"));
const Price = lazy(() => import("../filters/Price"));
const Filter = () => {
  const { clearFilter } = useFilterProductContext();
  return (
    <>
      <div className=" flex lg:w-1/5 w-full flex-col   space-y-4 ">
        <Suspense fallback={<Shimmer />}>
          <Category />
          <Company />
          <Colors />
          <Price />
          <Button name={"Clear Filter"} handle={clearFilter} />
        </Suspense>
      </div>
    </>
  );
};

export default Filter;
