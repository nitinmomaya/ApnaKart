import { DELIVERY_CHARGES, RANDOM_ADDRESS } from "../../../contant";
import Button from "../../UI/Button";
import PriceHelper from "../../utils/PriceHelper";

const CartBill = ({ totalPrice, TAXES, GRAND_TOTAL, setIsOpen }) => {
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div className="lg:w-1/3  w-full p-4 bg-white font-display border-[1px] rounded-lg border-slate-200  h-max mt-24   ">
        <p className="text-slate-500 font-medium text-base ">
          Delivery Address
        </p>
        <div className="py-2 space-y-2">
          <h1 className="text-slate-700 text-xl font-semibold">Nitin Momaya</h1>
          <p className="text-slate-700 text-base ">{RANDOM_ADDRESS}</p>
        </div>

        <p className="text-slate-500 font-medium text-base pt-2 ">
          Bill Details
        </p>

        <div className="flex w-full flex-col space-y-2 mt-2 mb-8">
          <div className="flex w-full justify-between">
            <h1 className="text-slate-700 text-base ">Item Bill</h1>
            <p className="text-slate-700 text-base font-semibold">
              <PriceHelper price={totalPrice} />
            </p>
          </div>
          <div className="flex w-full justify-between">
            <h1 className="text-slate-700 text-base ">Delivery Charges</h1>
            <p className="text-slate-700 text-base font-semibold">
              <PriceHelper price={DELIVERY_CHARGES} />
            </p>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex w-full md:flex-row flex-col">
              <h1 className="text-slate-700 text-base  ">
                Taxes
                <span className=" text-sm text-slate-500">
                  {"(18% GST included)"}
                </span>
              </h1>
            </div>
            <p className="text-slate-700 text-base font-semibold">
              <PriceHelper price={TAXES} />
            </p>
          </div>

          <div className="flex w-full pt-4 justify-between">
            <h1 className="text-slate-700 text-xl font-bold ">Grand Total</h1>
            <p className="text-slate-700 text-xl font-bold">
              <PriceHelper price={GRAND_TOTAL} />
            </p>
          </div>
        </div>
        <Button handle={handleOpen} name={"Order Now"} />
      </div>
    </>
  );
};

export default CartBill;
