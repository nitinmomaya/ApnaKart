import ProductQuantity from "../components/ProductQuantity";
import PriceHelper from "../utils/PriceHelper";

const CartItem = ({
  id,
  name,
  image,
  color,
  price,
  quantity,
  company,
  stock,
}) => {
  console.log("CART COMPANY", company);
  return (
    <>
      <div className="w-full  md:flex-row flex-col  flex bg-white border-[1px] rounded-lg border-slate-200 items-center">
        <img src={image} className="h-full w-96" alt="" />

        <div className="w-full flex md:px-6 px-4  pb-4 flex-col  ">
          <div className="flex flex-col w-full ">
            <div className="flex justify-between items-center pt-4 ">
              <h1 className="text-slate-700 text-2xl font-semibold">
                {name ? name.charAt(0).toUpperCase() + name.slice(1) : name}
              </h1>
              <p className="text-slate-700 text-xl font-semibold ">
                <PriceHelper price={price * quantity} />
                <span className="pl-2 text-sm text-slate-500">x{quantity}</span>
              </p>
            </div>
            <p className="text-slate-500 text-xl font-regular pt-2">
              {company
                ? company.charAt(0).toUpperCase() + company.slice(1)
                : company}
            </p>

            <div className="flex gap-2 py-4 items-center">
              <h1 className="text-slate-700 text-lg">Color:</h1>
              <div
                className="w-6 h-6  rounded-md"
                style={{ backgroundColor: color, color: color }}
              ></div>
            </div>

            <div className="flex gap-2 py-4 items-center">
              <h1 className="text-slate-700 text-lg">Price: </h1>
              <p className="text-slate-700 text-xl font-semibold ">
                <PriceHelper price={price} />
              </p>
            </div>
          </div>

          <div className="w-full flex md:justify-end">
            <div className="w-44  justify-between flex pt-8   items-center space-x-6">
              <ProductQuantity id={id} colors={color} stock={stock} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
