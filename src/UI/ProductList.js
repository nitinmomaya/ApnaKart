import img from "../assest/Apple-Mobile.jpg";
import Button from "../UI/Button";
const ProductList = () => {
  return (
    <>
      <div className="flex w-full space-x-8 items-center my-4 ">
        <img className="w-60 h-60" src={img} alt="" />
        <div className="flex flex-col w-full space-y-4">
          {/* product overview */}
          <h1 className="font-display font-bold text-xl text-slate-900 ">
            Iphone 12 pro Max
          </h1>
          <p className="font-display font-medium text-base text-gray-500  ">
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
