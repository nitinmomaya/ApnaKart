import { lazy, Suspense } from "react";
import Shimmer from "../shimmer/Shimmer";

const CartItem = lazy(() => import("../../UI/CartItem"));
const CartList = ({ cart }) => {
  return (
    <>
      <div className="flex flex-col  font-display space-y-4">
        {cart.map((item) => {
          return (
            <Suspense fallback={<Shimmer />} key={item.id}>
              <CartItem key={item.id} {...item} />
            </Suspense>
          );
        })}
      </div>
    </>
  );
};

export default CartList;
