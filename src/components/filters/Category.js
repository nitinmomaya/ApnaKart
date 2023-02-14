const Category = () => {
  return (
    <>
      <div className=" font-display bg-white flex flex-col w-full py-4 px-2 space-y-2 border-slate-200 border-2 rounded-lg">
        <h1 className="font-semibold text-xl text-slate-700">Category</h1>
        <div>
          <ul className="font-display text-slate-600 text-base space-y-2">
            <li></li>
            <li>Show All Products</li>
            <li>Mobile</li>
            <li>laptop</li>
            <li>Computer</li>
            <li>Accessories</li>
            <li>Watch</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Category;
