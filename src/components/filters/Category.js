import { useFilterProductContext } from "../../context/filterProductContext";
import { useProductContext } from "../../context/productContext";
const Category = () => {
  const { filterType } = useFilterProductContext();
  const { products } = useProductContext();

  //getting all the category names
  const category = products.map((comp) => comp.category);

  //filtering out duplicate values from Array
  const filterCategory = category.filter(
    (item, index) => category.indexOf(item) === index
  );
  console.log("cattegory rendered");
  return (
    <>
      <div className=" font-display bg-white flex flex-col w-full   space-y-2 border-slate-200 border-[1px] rounded-lg">
        <h1 className="font-semibold text-xl text-slate-700 px-4 pt-4">
          Category
        </h1>
        <div>
          <div className="font-display text-slate-600 text-base space-y-2">
            <div
              onClick={() => {
                filterType("category", "all");
              }}
              className={"py-3 px-4  cursor-pointer  hover:bg-slate-50 "}
            >
              Show All Products
            </div>
            {filterCategory.map((cat, index) => (
              <div
                key={index}
                onClick={() => {
                  const value = cat;
                  filterType("category", value);
                }}
                className={"py-3 px-4  cursor-pointer  hover:bg-slate-50 "}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
