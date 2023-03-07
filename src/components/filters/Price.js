import { lazy, Suspense } from "react";
import { useFilterProductContext } from "../../context/filterProductContext";
import Shimmer from "../shimmer/Shimmer";

const PriceHelper = lazy(() => import("../../utils/PriceHelper"));
const InputSlider = lazy(() => import("../../UI/InputSlider"));
const Price = () => {
  const {
    filters: { minPrice, maxPrice, price },
  } = useFilterProductContext();
  return (
    <>
      <div className=" font-display bg-white flex flex-col w-full py-4 px-4 space-y-2 border-slate-200 border-[1px] rounded-lg">
        <h1 className="font-semibold text-xl text-slate-700">Price</h1>
        <div>
          <h1>
            <Suspense fallback={<Shimmer />}>
              <PriceHelper price={price} />
            </Suspense>
          </h1>
          <Suspense fallback={<Shimmer />}>
            <InputSlider min={minPrice} max={maxPrice} price={price} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Price;
