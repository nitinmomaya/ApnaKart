import img from "../../assest/Empty.png";

const Empty = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center font-display">
        <img
          rel="preload"
          as="image"
          src={img}
          className="w-60 h-60"
          alt="error"
        />
        <div className="flex justify-center flex-col items-center space-y-2">
          <h1 className="text-3xl text-slate-700 font-semibold">
            Your Cart is Empty
          </h1>
          <p className="text-slate-700 text-lg">
            Please Add Product in the Cart
          </p>
        </div>
      </div>
    </>
  );
};

export default Empty;
