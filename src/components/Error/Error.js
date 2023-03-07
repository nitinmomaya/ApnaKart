import img from "../../assest/Error.jpg";

const Error = () => {
  return (
    <>
      <div className="flex  flex-col justify-center items-center space-y-8 font-display ">
        <img
          rel="preload"
          as="image"
          src={img}
          className="w-80 h-max"
          alt="error"
        />
        <div className="flex justify-center flex-col items-center space-y-2">
          <h1 className="text-3xl text-slate-700 font-semibold">
            No Product Found
          </h1>
          <p className="text-slate-700 text-lg">
            Please Search with a different Value
          </p>
        </div>
      </div>
    </>
  );
};

export default Error;
