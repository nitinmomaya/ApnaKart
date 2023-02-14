import { FiStar, FiCheck, FiPlus, FiMinus } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import PriceHelper from "../utils/PriceHelper";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductContent = ({
  name,
  stars,
  reviews,
  price,
  description,
  stock,

  colors = [],
}) => {
  console.log("CONT COLOR", colors);

  const [col, setCol] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  };

  const handleDecrease = () => {
    quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1);
  };
  return (
    <>
      <div className=" md:w-1/2 w-full flex flex-col ">
        <h1 className="font-display text-blue-500 font-semibold text-xs py-2">
          New Launch
        </h1>
        <div className="flex sm:justify-between sm:flex-row flex-col sm:items-center">
          <h1 className=" font-display font-semibold text-2xl text-gray-700 pb-2">
            {name.toUpperCase()}
          </h1>
          <div className="flex sm:justify-between sm:flex-row items-center space-x-4">
            <div className="flex px-2 py-2 space-x-1 bg-green-600 rounded-md  items-center">
              <FiStar className="w-5 h-5 text-white " />
              <p className="font-display font-semibold text-white">{stars}</p>
            </div>
            <p className="font-display text-gray-700  text-base">
              {reviews} Reviews
            </p>
          </div>
        </div>
        <div className="flex space-x-4 py-2">
          <p className="font-display font-semibold text-gray-700 text-xl">
            <PriceHelper price={price} />
          </p>
          <p className="font-display font-semibold text-gray-500 text-xl line-through">
            <PriceHelper price={price + 200000} />
          </p>
        </div>
        <p className="font-display font-medium text-base text-gray-500 py-2 ">
          {description}
        </p>

        <div className="pr-8">
          <p className="font-display font-semibold text-md text-slate-500 pb-2">
            Colors
          </p>
          <div className="flex">
            {colors.map((color, index) => {
              return (
                <button
                  key={index}
                  style={{ backgroundColor: color }}
                  className={
                    col === color
                      ? "w-10 h-10 mr-4 rounded-md  flex items-center justify-center"
                      : "w-10 h-10 mr-4 rounded-md"
                  }
                  onClick={() => setCol(color)}
                >
                  {col === color ? (
                    <FiCheck className=" text-white w-5 h-5" />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
        <div className="w-44 justify-between flex pt-8 py-4 items-center space-x-6">
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

        <div className="flex">
          <p className="font-display font-semibold text-md text-slate-500 pb-2 pr-2">
            Stock Available:
          </p>
          <p className="text-slate-700 text-base font-display font-semibold">
            {stock}
          </p>
        </div>

        <Link to="/cart">
          <button className=" flex w-full bg-slate-700 rounded-md py-4 my-4 text-white  justify-center item-c space-x-3 ">
            <BsHandbag className="w-6 h-6  " />
            <p className="font-display font-semibold ">Add to Cart</p>
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProductContent;
