import { lazy, Suspense, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import { DELIVERY_CHARGES } from "../../../contant";
import { useCartContext } from "../../context/cartContext";
import Shimmer from "../shimmer/Shimmer";

const Button = lazy(() => import("../../UI/Button"));
const CartList = lazy(() => import("./CartList"));
const Modal = lazy(() => import("../../UI/Modal"));
const PriceHelper = lazy(() => import("../../utils/PriceHelper"));
const CartBill = lazy(() => import("./CartBill"));
const Empty = lazy(() => import("../Error/Empty"));
const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();
  let TAXES = (totalPrice * 18) / 100;
  let GRAND_TOTAL = totalPrice + DELIVERY_CHARGES + TAXES;

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    clearCart();
  };

  return (
    <>
      {cart.length === 0 ? (
        <div className="w-full pt-28 mb-10 flex flex-col space-y-8 justify-center items-center relative z-10">
          <Suspense fallback={<Shimmer />}>
            <Empty />
            <Link to="/products">
              <Suspense fallback={<Shimmer />}>
                <Button name={"Continue Shopping"} />
              </Suspense>
            </Link>
          </Suspense>
        </div>
      ) : (
        <div className="w-full bg-white mb-10 flex pt-28  xl:px-24 px-8 justify-between gap-10 lg:flex-row flex-col ">
          <div className="lg:w-[70%] w-full h-full bg-white ">
            <div className=" pb-8 space-y-2 ">
              <h1 className="font-display font-bold text-3xl text-slate-900 ">
                Cart Details
              </h1>
              <p className="font-display text-lg text-slate-700 ">
                {` You have ${cart?.length} items in the Cart`}
              </p>
            </div>

            <CartList cart={cart} />
          </div>
          <Suspense fallback={<Shimmer />}>
            <CartBill
              totalPrice={totalPrice}
              TAXES={TAXES}
              GRAND_TOTAL={GRAND_TOTAL}
              setIsOpen={setIsOpen}
            />
          </Suspense>

          <Suspense fallback={<Shimmer />}>
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
                      <Suspense fallback={<Shimmer />}>
                        <PriceHelper price={GRAND_TOTAL} />
                      </Suspense>
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
            </Modal>
          </Suspense>
        </div>
      )}
    </>
  );
};

export default Cart;
