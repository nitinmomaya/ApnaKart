import { useCartContext } from "../context/cartContext";

import Button from "../UI/Button";
import CartItem from "../UI/CartItem";

const Cart = () => {
  const { cart } = useCartContext();

  return (
    <>
      <div className="w-full bg-white mb-16 flex pt-28  xl:px-24 px-8 justify-between gap-10 lg:flex-row flex-col relative">
        <div className="lg:w-[70%] w-full ">
          <div className=" pb-8 space-y-2 ">
            <h1 className="font-display font-bold text-3xl text-slate-900 ">
              Cart Details
            </h1>
            <p className="font-display text-lg text-slate-700 ">
              {` You have ${cart.length} items in the Cart`}
            </p>
          </div>

          <div className="flex flex-col  font-display space-y-4">
            {cart.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
        </div>

        <div className="lg:w-1/4 xl:m-[98px] w-full p-4 bg-white font-display border-[1px] rounded-lg border-slate-200  h-max lg:fixed right-0 lg:mr-8 lg:mt-28 ">
          <p className="text-slate-500 font-medium text-base ">
            Delivery Address
          </p>
          <div className="py-2 space-y-2">
            <h1 className="text-slate-700 text-xl font-semibold">
              Nitin Momaya
            </h1>
            <p className="text-slate-700 text-base ">
              ABC Apartments, W-2, 202, Greenfield, Bangalore, Karnataka, 560067
            </p>
          </div>

          <p className="text-slate-500 font-medium text-base pt-2 ">
            Bill Details
          </p>

          <div className="flex w-full flex-col space-y-2 mt-2 mb-8">
            <div className="flex w-full justify-between">
              <h1 className="text-slate-700 text-base ">Item Bill</h1>
              <p className="text-slate-700 text-base font-semibold">₹9,999</p>
            </div>
            <div className="flex w-full justify-between">
              <h1 className="text-slate-700 text-base ">Delivery Charges</h1>
              <p className="text-slate-700 text-base font-semibold">₹9,999</p>
            </div>
            <div className="flex w-full justify-between">
              <h1 className="text-slate-700 text-base ">Taxes</h1>
              <p className="text-slate-700 text-base font-semibold">₹9,999</p>
            </div>

            <div className="flex w-full justify-between">
              <h1 className="text-slate-700 text-base font-bold ">
                Grand Total
              </h1>
              <p className="text-slate-700 text-base font-bold">₹19,999</p>
            </div>
          </div>
          <Button name={"Order Now"} />
        </div>
      </div>
    </>
  );
};

export default Cart;
