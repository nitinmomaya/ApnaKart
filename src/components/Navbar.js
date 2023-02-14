import { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuth";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  let { user, logout } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleState = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="flex flex-col  w-full fixed  justify-end z-10">
        <div className="flex justify-between  sm:px-24 px-8 py-4   font-display font items-center border-b-slate-200 border-b bg-white w-full ">
          <Link to="/">
            <h1 className="font-display font-semibold text-2xl text-slate-700">
              ApnaKart
            </h1>
          </Link>
          <ul className="sm:flex sm:items-center md:space-x-12 sm:space-x-4 hidden">
            <Link to="/">
              <li className="font-display text-gray-500 font-semibold hover:text-slate-700">
                Home
              </li>
            </Link>
            <Link to="/products">
              <li className="font-display text-gray-500 font-semibold hover:text-slate-700">
                Products
              </li>
            </Link>
            <Link to="/about">
              <li className="font-display text-gray-500 font-semibold hover:text-slate-700">
                About
              </li>
            </Link>

            <Link to="/contact">
              <li className="font-display text-gray-500 font-semibold hover:text-slate-700">
                Contact
              </li>
            </Link>
            <Link to="/cart">
              <div className=" flex justify-center items-center font-display text-gray-500 font-semibold hover:text-slate-700">
                <h1 className="px-2">Cart</h1>
                <p className="bg-slate-500 hover:bg-slate-700 rounded text-slate-50 p-2 py-1">
                  0
                </p>
              </div>
            </Link>

            <li>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="border-slate-200 border-solid border-2 px-4 py-2 rounded font-display font-semibold text-gray-500 hover:bg-slate-600 hover:text-white"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleLogout}
                  className="border-slate-200 border-solid border-2 px-4 py-2 rounded font-display font-semibold text-gray-500 hover:bg-slate-600 hover:text-white"
                >
                  Login
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
        <div
          className={
            isActive
              ? "flex py-4 sm:px-24 px-8 border-b-slate-200 border-b-[1px] bg-white"
              : "hidden"
          }
        >
          <ul className=" sm:hidden flex flex-col space-y-6">
            <Link to="/">
              <li className="  font-display text-gray-500 font-semibold hover:text-slate-700 ">
                Home
              </li>
            </Link>
            <Link to="/products">
              <li className="font-display text-gray-500 font-semibold hover:text-slate-700">
                Products
              </li>
            </Link>
            <Link to="/about">
              <li className="  font-display text-gray-500 font-semibold hover:text-slate-700 ">
                About
              </li>
            </Link>

            <Link to="/contact">
              <li className="  font-display text-gray-500 font-semibold hover:text-slate-700 ">
                Contact
              </li>
            </Link>
            <Link to="/cart">
              <div className=" flex justify-center items-center font-display text-gray-500 font-semibold hover:text-slate-700">
                <h1 className=" pr-4">Cart</h1>
                <p className="bg-slate-500 hover:bg-slate-700 rounded text-slate-50 p-2 py-1">
                  0
                </p>
              </div>
            </Link>

            <li>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="border-slate-200 border-solid border-2 px-4 py-2 rounded font-display font-semibold text-gray-500 hover:bg-slate-600 hover:text-white"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleLogout}
                  className="border-slate-200 border-solid border-2 px-4 py-2 rounded font-display font-semibold text-gray-500 hover:bg-slate-600 hover:text-white"
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
