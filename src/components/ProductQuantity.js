import { useState } from "react";
import { BsHandbag } from "react-icons/bs";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";

const ProductQuantity = ({ id, colors, stock, show, company, product }) => {
  const { addToCart } = useCartContext();

  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  };

  const handleDecrease = () => {
    quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1);
  };

  console.log("QUANTITY OF STOCK", quantity);

  return (
    <>
      <div className="w-full flex-col">
        <div className="w-44 justify-between flex  items-center space-x-6">
          <button
            className=" flex  p-2 border-slate-200 border-[1px] rounded-md  "
            onClick={handleDecrease}
          >
            <FiMinus className="w-8 h-8 text-slate-700" />
          </button>
          <p className="text-slate-700 text-xl font-display font-semibold">
            {quantity}
          </p>
          <button
            className=" flex  p-2 border-slate-200 border-[1px] rounded-md  "
            onClick={handleIncrease}
          >
            <FiPlus className="w-8 h-8 text-slate-700" />
          </button>
        </div>
        {show && (
          <Link to="/cart">
            <button
              onClick={() => addToCart(id, colors, quantity, company, product)}
              className=" flex w-full bg-slate-700 rounded-md py-4 my-6 text-white  justify-center item-c space-x-3 "
            >
              <BsHandbag className="w-6 h-6  " />
              <p className="font-display font-semibold ">Add to Cart</p>
            </button>
          </Link>
        )}
      </div>
    </>
  );
};

export default ProductQuantity;
