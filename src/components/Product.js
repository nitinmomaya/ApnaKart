import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../contant";
import { useProductContext } from "../context/productContext";
import { FaStar } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import PriceHelper from "../utils/PriceHelper";

const Product = () => {
  const params = useParams();
  const { id } = params;
  const { getProduct, isLoading, product } = useProductContext();

  const {
    id: alias,
    name = "",

    price,
    description,

    stars,
    reviews,
    image = [{ url: "" }],
  } = product;

  const [mainimg, setMainImg] = useState(image[0].url);

  //Rating stars

  useEffect(() => {
    getProduct(`${API_URL}?id=${id}`);
  }, []);
  return (
    <>
      <div className="pt-28 flex  flex-col px-24 py-20 justify-between md:flex-row">
        <div className="md:w-1/2 w-full flex flex-col md:pr-20">
          <img
            className=" w-full h-96 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            src={mainimg}
          />
          <div className="flex justify-between w-full  py-8 ">
            {image.map((img, index) => {
              return (
                <img
                  className="sm:w-20 sm:h-20 w-14 h-14 rounded-md cursor-pointer"
                  src={img.url}
                  key={index}
                  onClick={() => setMainImg(img.url)}
                />
              );
            })}
          </div>
        </div>
        <div className=" md:w-1/2 w-full flex flex-col ">
          <h1 className="font-display text-blue-500 font-semibold text-xs py-2">
            New Launch
          </h1>
          <div className="flex sm:justify-between sm:flex-row flex-col sm:items-center">
            <h1 className=" font-display font-semibold text-2xl text-gray-700 pb-2">
              {name.toUpperCase()}
            </h1>
            <div className="flex sm:justify-between sm:flex-row items-center space-x-4">
              <div className="flex px-4 py-2 space-x-2 bg-green-600 rounded-md  items-center">
                <FaStar className="w-5 h-5 text-white" />
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
              <PriceHelper price={price} />
            </p>
          </div>
          <p className="font-display font-medium text-base text-gray-500 py-2 ">
            {description}
          </p>

          <button className=" flex w-full bg-slate-700 rounded-md py-4 my-4 text-white  justify-center item-c space-x-3 ">
            <BsHandbag className="w-6 h-6  " />{" "}
            <p className="font-display font-semibold ">Add to Cart</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
