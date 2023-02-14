const Colors = () => {
  return (
    <>
      <div className=" font-display bg-white flex flex-col w-full py-4 px-2 space-y-2 border-slate-200 border-2 rounded-lg">
        <h1 className="font-semibold text-xl text-slate-700">Colors</h1>

        <div className="flex flex-wrap md:space-x-4 space-x-2 space-y-2">
          <button></button>
          <h1>All</h1>
          <button className="w-6 h-6  rounded-md bg-green-500"></button>
          <button className="w-6 h-6  rounded-md bg-green-500"></button>
          <button className="w-6 h-6  rounded-md bg-green-500"></button>
          <button className="w-6 h-6  rounded-md bg-green-500"></button>
          <button className="w-6 h-6  rounded-md bg-green-500"></button>
        </div>
      </div>
    </>
  );
};

export default Colors;
