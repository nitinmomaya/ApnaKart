import Dropdown from "../../UI/Dropdown";

const Company = () => {
  return (
    <>
      <div className=" font-display bg-white flex flex-col w-full py-4 px-2 space-y-2 border-slate-200 border-2 rounded-lg">
        <h1 className="font-semibold text-xl text-slate-700">Company</h1>
        <div>
          <Dropdown />
        </div>
      </div>
    </>
  );
};

export default Company;
