import { Link } from "react-router-dom";
import PriceHelper from "../utils/PriceHelper";
import Button from "./Button";

const ProductList = ({ productName = "", price, img, id, description }) => {
  return (
    <>
      <Link to={`/product/${id}`}>
        <div className="flex w-full lg:flex-row  lg:space-x-8 md:justify-between lg:align-top item-center justify-center space-y-4 my-4 flex-col ">
          <img className="md:w-80 h-80 w-full rounded-md " src={img} alt="" />
          <div className="flex flex-col w-full space-y-4 ">
            {/* product overview */}
            <h1 className="font-display font-bold text-2xl text-slate-900 ">
              {/* To make first letter capital */}
              {productName.charAt(0).toUpperCase() + productName.slice(1)}
            </h1>
            <p className="font-display font-bold text-xl text-slate-700  ">
              <PriceHelper price={price} />
            </p>
            <p className="font-display font-medium text-lg text-gray-500  ">
              {description}
            </p>
            <Button name={"Visit Product"} />
          </div>
        </div>
      </Link>
    </>
  );
};
export default ProductList;
