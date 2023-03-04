import { BsHandbag } from "react-icons/bs";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

const ProductQuantity = ({
  id,
  colors,
  quantity,
  show,
  company,
  product,
  setIncrease,
  setDecrease,
}) => {
  const { addToCart } = useCartContext();

  return (
    <>
      <div className="w-full flex-col">
        <div className="w-36 justify-between flex  items-center space-x-6">
          <button
            className=" flex  p-2 border-slate-200 border-[1px] rounded-md  hover:border-slate-400 "
            onClick={() => setDecrease(id)}
          >
            <FiMinus className="w-6 h-6 text-slate-500 hover:text-slate-700" />
          </button>
          <p className="text-slate-700 text-xl font-display font-semibold">
            {quantity}
          </p>
          <button
            className=" flex  p-2 border-slate-200 border-[1px] rounded-md  hover:border-slate-400 "
            onClick={() => setIncrease(id)}
          >
            <FiPlus className="w-6 h-6  text-slate-500 hover:text-slate-700" />
          </button>
        </div>
        {show && (
          <Link to="/cart">
            <button
              onClick={() => addToCart(id, colors, quantity, company, product)}
              className=" flex w-full bg-slate-700 hover:bg-slate-500 rounded-md py-4 my-6 text-white  justify-center item-c space-x-3 "
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
