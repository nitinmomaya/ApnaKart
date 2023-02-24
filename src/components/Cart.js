import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import { DELIVERY_CHARGES, RANDOM_ADDRESS } from "../../contant";
import { useCartContext } from "../context/cartContext";

import Button from "../UI/Button";
import CartItem from "../UI/CartItem";
import Modal from "../UI/Modal";
import PriceHelper from "../utils/PriceHelper";
import Empty from "./Error/Empty";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();
  let TAXES = (totalPrice * 18) / 100;
  let GRAND_TOTAL = totalPrice + DELIVERY_CHARGES + TAXES;

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
    clearCart();
  };

  return (
    <>
      {cart.length === 0 ? (
        <div className="w-full pt-28 mb-10 flex flex-col space-y-8 justify-center items-center relative z-10">
          <Empty />
          <Link to="/products">
            <Button name={"Continue Shopping"} />
          </Link>
        </div>
      ) : (
        <div className="w-full bg-white mb-10 flex pt-28  xl:px-24 px-8 justify-between gap-10 lg:flex-row flex-col ">
          <div className="lg:w-[70%] w-full h-full bg-white ">
            <div className=" pb-8 space-y-2 ">
              <h1 className="font-display font-bold text-3xl text-slate-900 ">
                Cart Details
              </h1>
              <p className="font-display text-lg text-slate-700 ">
                {` You have ${cart.length ? cart.length : 0} items in the Cart`}
              </p>
            </div>

            <div className="flex flex-col  font-display space-y-4">
              {cart.map((item) => {
                return <CartItem key={item.id} {...item} />;
              })}
            </div>
          </div>

          <div className="lg:w-1/3  w-full p-4 bg-white font-display border-[1px] rounded-lg border-slate-200  h-max mt-24   ">
            <p className="text-slate-500 font-medium text-base ">
              Delivery Address
            </p>
            <div className="py-2 space-y-2">
              <h1 className="text-slate-700 text-xl font-semibold">
                Nitin Momaya
              </h1>
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
                <h1 className="text-slate-700 text-xl font-bold ">
                  Grand Total
                </h1>
                <p className="text-slate-700 text-xl font-bold">
                  <PriceHelper price={GRAND_TOTAL} />
                </p>
              </div>
            </div>
            <Button handle={handleOpen} name={"Order Now"} />
          </div>
          <Modal open={isOpen} close={handleClose}>
            <div className="lg:w-[600px] sm:w-[600px] w-[350px] bg-white flex flex-col justify-center items-center space-y-6 rounded-lg ">
              <div className="w-10 h-10 rounded-full bg-green-600 flex justify-center items-center mt-8">
                <FiCheck className="w-6 h-6 text-white" />
              </div>

              <div className="w-full flex flex-col justify-center items-center space-y-1 ">
                <h1 className="text-slate-900 text-2xl font-semibold text-center">
                  Order Placed Successfully
                </h1>
                <p className="text-slate-700 text-lg text-center px-10">
                  Your order has been placed Successfully you can
                  <span className="text-slate-700  font-semibold px-2">
                    <PriceHelper price={GRAND_TOTAL} />
                  </span>
                  through Cash at the time of delivery
                </p>
              </div>

              <div className="w-full flex justify-end space-x-4 py-4 border-t bg-slate-50 border-t-slate-200 pr-4 rounded-br-lg rounded-bl-lg">
                <Link to="/">
                  <button
                    onClick={() => clearCart()}
                    className="bg-slate-700 font-semibold hover:bg-slate-500 text-white px-4 py-2 rounded-md"
                  >
                    Go to Home
                  </button>
                </Link>
                <button
                  onClick={handleClose}
                  className="px-4 py-2 bg-white border-[1px] border-slate-200 rounded-md text-slate-900 font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
            {/* </div> */}
          </Modal>
        </div>
      )}
    </>
  );
};

export default Cart;
