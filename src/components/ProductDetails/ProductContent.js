import { FiStar, FiCheck } from "react-icons/fi";

import PriceHelper from "../../utils/PriceHelper";
import { lazy, Suspense, useState } from "react";
const ProductQuantity = lazy(() => import("./ProductQuantity"));

const ProductContent = ({ product }) => {
  const {
    name,
    id,
    stars,
    reviews,
    price,
    description,
    stock,

    colors = [],
  } = product;

  console.log("CONT COLOR", colors, "PROD CONT", product);

  const [col, setCol] = useState(colors[0]);

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
      <div className=" md:w-1/2 w-full flex flex-col ">
        <h1 className="font-display text-blue-500 font-semibold text-xs py-2">
          New Launch
        </h1>
        <div className="flex sm:justify-between sm:flex-row flex-col sm:items-center">
          <h1 className=" font-display font-semibold text-2xl text-gray-700 pb-2">
            {name?.charAt(0)?.toUpperCase() + name?.slice(1)}
          </h1>
          <div className="flex sm:justify-between sm:flex-row items-center space-x-4">
            <div className="flex px-2 py-2 space-x-1 bg-green-700 rounded-md  items-center">
              <FiStar className="w-5 h-5 text-white fill-white" />
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
        <p className="font-display  text-base text-gray-700 py-2">
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
        <div className="flex py-4">
          <p className="font-display font-semibold text-md text-slate-500 pb-2 pr-2">
            Stock Available:
          </p>
          <p className="text-slate-700 text-base font-display font-semibold">
            {stock}
          </p>
        </div>
        <div className="w-full">
          <Suspense>
            <ProductQuantity
              id={id}
              colors={col}
              stock={stock}
              product={product}
              quantity={quantity}
              show={true}
              setDecrease={handleDecrease}
              setIncrease={handleIncrease}
            />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default ProductContent;
