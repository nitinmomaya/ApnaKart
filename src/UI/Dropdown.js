import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useFilterProductContext } from "../context/filterProductContext";

const Dropdown = ({ name, options = [], type }) => {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [label, setLabel] = useState("All");
  const { sort, filter } = useFilterProductContext();

  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show);
    setIsOpen(!isOpen);
  };

  // const lowest = () => {
  //   console.log("PRESSED");
  // };
  return (
    <>
      <div className="w-full flex items-center">
        {name && <p className="w-28">{name}</p>}
        <div className="w-full relative flex items-center">
          <button
            onClick={handleShow}
            className=" w-full justify-between flex items-center bg-white px-2 py-2 rounded-md border-[1px]  border-slate-200"
          >
            {label}
            {isOpen ? (
              <FiChevronUp className="mx-2 w-5 h-5 text-slate-600" />
            ) : (
              <FiChevronDown className="mx-2 w-5 h-5 text-slate-600" />
            )}
          </button>

          <div
            className={
              show
                ? "absolute bg-white z-10   rounded-md border-[1px] top-12 w-full border-slate-200 "
                : "hidden"
            }
          >
            {options.map((opt, index) => (
              <div
                key={index}
                onClick={() => {
                  {
                    sort && sort(opt.value);
                  }
                  {
                    filter && filter(type, opt);
                  }
                  setLabel(
                    opt.name
                      ? opt.name
                      : opt.charAt(0).toUpperCase() + opt.slice(1)
                  );
                  setIsOpen(!isOpen);
                  console.log("OPT:", opt);
                  setShow(!show);
                }}
                className="py-3 px-4 cursor-pointer  hover:bg-slate-50 "
              >
                {opt.name
                  ? opt.name
                  : opt.charAt(0).toUpperCase() + opt.slice(1)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
