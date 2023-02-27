import { Link } from "react-router-dom";
import PriceHelper from "../utils/PriceHelper";

const ProductCard = ({ productName = "", companyName, price, img, id }) => {
  return (
    <>
      <Link to={`/product/${id}`}>
        <div className="w-full  bg-white  rounded-lg border-slate-100 border-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 my-4">
          <img
            loading="lazy"
            className="lg:w-[400px] lg:h-[300px] w-full rounded-t-lg"
            src={img}
            alt=""
          />

          <div className="flex flex-col  px-4 py-4 space-y-1">
            <h1 className="font-display font-semibold text-gray-700 text-2xl">
              {/* To make first letter capital */}
              {productName.charAt(0).toUpperCase() + productName.slice(1)}
            </h1>
            <p className="font-display font-medium text-gray-700 text-lg">
              {companyName.charAt(0).toUpperCase() + companyName.slice(1)}
            </p>
            <p className="font-display font-semibold text-gray-700 text-xl ">
              <PriceHelper price={price} />
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
