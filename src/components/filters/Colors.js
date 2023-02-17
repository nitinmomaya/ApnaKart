const Colors = () => {
  return (
    <>
      <div className=" font-display bg-white flex flex-col w-full py-4 px-4 space-y-2 border-slate-200 border-[1px] rounded-lg">
        <h1 className="font-semibold text-xl text-slate-700">Colors</h1>

        <div className="flex flex-wrap md:space-x-4 space-x-2 space-y-2 items-center">
          <h1 className="-mx-2"></h1>
          <h1 className="w-6 h-6 flex items-center justify-center">All</h1>
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
