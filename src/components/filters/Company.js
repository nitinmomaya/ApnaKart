import { useProductContext } from "../../context/productContext";
import Dropdown from "../../UI/Dropdown";

const Company = () => {
  const { products } = useProductContext();

  //getting all the company names
  const company = products.map((comp) => comp.company);

  //filtering out duplicate values from Array
  const filterCompany = company.filter(
    (item, index) => company.indexOf(item) === index
  );
  console.log("filter", filterCompany);
  return (
    <>
      <div className=" font-display bg-white flex flex-col w-full py-4 px-4 space-y-2 border-slate-200 border-[1px] rounded-lg">
        <h1 className="font-semibold text-xl text-slate-700">Company</h1>
        <div>
          <Dropdown options={filterCompany} type={"company"} />
        </div>
      </div>
    </>
  );
};

export default Company;
