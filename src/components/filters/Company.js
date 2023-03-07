import { lazy, Suspense } from "react";
import { useProductContext } from "../../context/productContext";
import Shimmer from "../shimmer/Shimmer";
const Dropdown = lazy(() => import("../../UI/Dropdown"));
const Company = () => {
  const { products } = useProductContext();

  //getting all the company names
  const company = products.map((comp) => comp.company);

  //filtering out duplicate values from Array
  const filterCompany = company.filter(
    (item, index) => company.indexOf(item) === index
  );

  return (
    <>
      <div className=" font-display bg-white flex flex-col w-full py-4 px-4 space-y-2 border-slate-200 border-[1px] rounded-lg">
        <h1 className="font-semibold text-xl text-slate-700">Company</h1>
        <div>
          <Suspense fallback={<Shimmer />}>
            <Dropdown options={filterCompany} type={"company"} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Company;
