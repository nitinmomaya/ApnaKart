import { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleState = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="flex justify-between px-8 py-4 font-display font items-center ">
        <h1 className="font-display font-semibold text-2xl text-slate-700">
          ApnaMart
        </h1>
        <ul className="sm:flex sm:items-center sm:space-x-12 hidden">
          <li className="font-display font-semibold hover:text-slate-700">
            Home
          </li>
          <li className="font-display font-semibold hover:text-slate-700">
            About
          </li>
          <li className="font-display font-semibold hover:text-slate-700">
            Contact
          </li>

          <li>
            {isLogin ? (
              <button className="border-slate-700 border-solid border-2 px-4 py-2 rounded font-display font-semibold text-slate-700 hover:bg-slate-600 hover:text-white">
                Login
              </button>
            ) : (
              <button className="border-slate-700 border-solid border-2 px-4 py-2 rounded font-display font-semibold text-slate-700 hover:bg-slate-600 hover:text-white">
                Logout
              </button>
            )}
          </li>
        </ul>
        <div className="sm:hidden ">
          {isActive ? (
            <button onClick={handleState}>
              <FiX className="w-9 h-9 text-slate-700" />
            </button>
          ) : (
            <button onClick={handleState}>
              <FiAlignJustify className="w-9 h-9 text-slate-700" />
            </button>
          )}
        </div>
      </div>

      <div className={isActive ? "flex" : "hidden"}>
        <ul className=" sm:hidden space-x-8 space-y-4">
          <li></li>
          <li className="font-display font-semibold hover:text-slate-700">
            Home
          </li>
          <li className="font-display font-semibold hover:text-slate-700">
            About
          </li>
          <li className="font-display font-semibold hover:text-slate-700">
            Contact
          </li>

          <li>
            {isLogin ? (
              <button className="border-slate-700 border-solid border-2 px-4 py-2 rounded font-display font-semibold text-slate-700 hover:bg-slate-600 hover:text-white">
                Login
              </button>
            ) : (
              <button className="border-slate-700 border-solid border-2 px-4 py-2 rounded font-display font-semibold text-slate-700 hover:bg-slate-600 hover:text-white">
                Logout
              </button>
            )}
          </li>
        </ul>

        {/* <ul className=" sm:hidden px-10 space-y-10 font-display">
          <li></li>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul> */}
      </div>
    </>
  );
};

export default Navbar;
