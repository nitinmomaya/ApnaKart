const ProductShimmer = () => {
  return (
    <>
      <div className="pt-28 flex  flex-col sm:px-24 px-8 py-20 justify-between md:flex-row">
        <div className="md:w-1/2 w-full flex flex-col md:pr-20">
          <div className=" w-full h-96 rounded-lg bg-slate-50"> </div>
          <div className="flex justify-between w-full  py-8 ">
            <div className="sm:w-20 sm:h-20 w-14 h-14 rounded-md bg-slate-50"></div>
            <div className="sm:w-20 sm:h-20 w-14 h-14 rounded-md bg-slate-50"></div>
            <div className="sm:w-20 sm:h-20 w-14 h-14 rounded-md bg-slate-50"></div>
            <div className="sm:w-20 sm:h-20 w-14 h-14 rounded-md bg-slate-50"></div>
          </div>
        </div>

        <div className=" md:w-1/2 w-full flex flex-col ">
          <div className=" bg-slate-50 w-14 h-1 py-2"></div>
          <div className=" bg-slate-50 w-20 h-2 py-2 my-4"></div>

          <div className="flex sm:justify-between sm:flex-row flex-col sm:items-center">
            <div className=" w-1/2 h-1 pb-2"></div>

            <div className="flex sm:justify-between sm:flex-row items-center space-x-4">
              <div className="  h-1 flex px-8 py-4 space-x-2 bg-slate-50 rounded-md  items-center"></div>
              <div className="  h-1 pb-2 bg-slate-50"></div>
            </div>
          </div>

          <div className="flex space-x-4 py-2">
            <div className=" bg-slate-50 w-14 h-1 py-2"></div>
            <div className=" bg-slate-50 w-14 h-1 py-2"></div>
          </div>
          <div className=" md:w-full w-full h-36 bg-slate-50 flex flex-col "></div>

          <div className=" flex w-full bg-slate-50 rounded-md py-8 my-4 text-white  justify-center  space-x-3 "></div>
        </div>
      </div>
    </>
  );
};

export default ProductShimmer;
