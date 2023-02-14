import img from "../assest/Apple-Mobile.jpg";
import PriceHelper from "../utils/PriceHelper";
import Button from "./Button";

const ProductList = () => {
  return (
    <>
      <div className="flex w-full lg:flex-row  md:space-x-4 md:justify-between lg:align-top item-center justify-center space-y-4 my-4 flex-col ">
        <img
          className="w-80 h-80 rounded-md border-2 border-slate-200"
          src={img}
          alt=""
        />
        <div className="flex flex-col w-full space-y-4 ">
          {/* product overview */}
          <h1 className="font-display font-bold text-2xl text-slate-900 ">
            Iphone 12 pro Max
          </h1>
          <p className="font-display font-bold text-xl text-slate-700  ">
            <PriceHelper price={1200000} />
          </p>
          <p className="font-display font-medium text-lg text-gray-500  ">
            The mobile is compact with its 6.2-inch OLED screen and far lighter
            at 168g. It perfectly captures the design, looks, and feel of the
            expensive one. It comes with a snapdragon processor with a 5n chip
            in it. It has a 200mp camera in the rear 100mp in front perfect for
            selfie lovers. It also support HDR content means you can watch 4K
            content on it.
          </p>
          <Button name={"Visit Product"} />
        </div>
      </div>
    </>
  );
};
export default ProductList;
