import { useFilterProductContext } from "../../context/filterProductContext";
import InputSlider from "../../UI/InputSlider";
import PriceHelper from "../../utils/PriceHelper";

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
            <PriceHelper price={price} />
          </h1>
          <InputSlider min={minPrice} max={maxPrice} price={price} />
        </div>
      </div>
    </>
  );
};

export default Price;
