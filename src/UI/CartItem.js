import { FiTrash } from "react-icons/fi";
import ProductQuantity from "../components/ProductDetails/ProductQuantity";
import { useCartContext } from "../context/cartContext";
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
  const { removeItem, setDecrease, setIncrease } = useCartContext();
  return (
    <>
      <div className="w-full h-max md:flex-row flex-col  flex bg-white border-[1px] rounded-lg border-slate-200 items-center">
        <img
          src={image}
          className="md:h-64 md:w-96 w-full bg-red-100 rounded-tl-lg lg:rounded-bl-lg lg:rounded-tr-none rounded-tr-lg"
          alt=""
        />

        <div className="w-full flex md:px-6 px-4  pb-4 flex-col  ">
          <div className="flex flex-col w-full ">
            <div className="flex justify-between items-center pt-2 ">
              <h1 className="text-slate-700 text-2xl font-semibold">
                {name ? name.charAt(0).toUpperCase() + name.slice(1) : name}
              </h1>
              <p className="text-slate-700 text-xl font-semibold ">
                <PriceHelper price={price * quantity} />
              </p>
            </div>
            <p className="text-slate-500 text-xl font-regular pt-2">
              {company
                ? company.charAt(0).toUpperCase() + company.slice(1)
                : company}
            </p>

            <div className="flex gap-2 py-2 items-center">
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
                <span className="pl-2 text-sm text-slate-500">x{quantity}</span>
              </p>
            </div>
          </div>

          <div className="w-full flex md:justify-end ">
            <div className=" w-full  justify-between flex    items-center space-x-6">
              <ProductQuantity
                id={id}
                colors={color}
                stock={stock}
                quantity={quantity}
                setDecrease={() => setDecrease(id)}
                setIncrease={() => setIncrease(id)}
              />
              <button
                className=" flex  p-2 border-slate-200 border-[1px] rounded-md   hover:border-slate-400"
                onClick={() => removeItem(id)}
              >
                <FiTrash className="w-6 h-6 text-red-500 hover:text-red-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
