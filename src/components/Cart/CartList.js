import { lazy, Suspense } from "react";
import CartItem from "../../UI/CartItem";
const CartItem = lazy(() => import("../../UI/CartItem"));
const CartList = ({ cart }) => {
  return (
    <>
      <div className="flex flex-col  font-display space-y-4">
        {cart.map((item) => {
          return (
            <Suspense>
              <CartItem key={item.id} {...item} />
            </Suspense>
          );
        })}
      </div>
    </>
  );
};

export default CartList;
