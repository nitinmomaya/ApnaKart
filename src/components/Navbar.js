import { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuth";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  let {user,logout}=useUserAuth();
  const navigate= useNavigate();

  const handleLogout= async()=>{

    try{
        await logout();
        navigate("/login")

    }
    

    catch(err){

        console.log(err.message);
    }
  }


  const handleState = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="flex justify-between px-8 py-4 font-display font items-center border-b-neutral-100 border-b">
        <h1 className="font-display font-semibold text-2xl text-slate-700">
          ApnaMart
        </h1>
        <ul className="sm:flex sm:items-center sm:space-x-12 hidden">
          <Link to="/"><li className="font-display text-gray-500 font-semibold hover:text-slate-700">
            Home
          </li></Link>
          <Link to='/about'><li className="font-display text-gray-500 font-semibold hover:text-slate-700">
            About
          </li></Link>
          <Link to='/contact'><li className="font-display text-gray-500 font-semibold hover:text-slate-700">
            Contact
          </li></Link>

          <li>
            {user ? (
              <button onClick={handleLogout} className="border-slate-200 border-solid border-2 px-4 py-2 rounded font-display font-semibold text-gray-500 hover:bg-slate-600 hover:text-white">
                Logout
              </button>
            ) : (
              <button onClick={handleLogout} className="border-slate-200 border-solid border-2 px-4 py-2 rounded font-display font-semibold text-gray-500 hover:bg-slate-600 hover:text-white">
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

      <div className={isActive ? "flex" : "hidden"}>
        <ul className=" sm:hidden space-x-8 space-y-4">
          <li></li>
          <Link to='/'><li className=" font-display text-gray-500 font-semibold hover:text-slate-700">
            Home
          </li></Link>
          
          <li className="font-display  text-gray-500 font-semibold hover:text-slate-700">
            About
          </li>
          <li className="font-display text-gray-500 font-semibold hover:text-slate-700">
            Contact
          </li>

          <li>
            {user ? (
              <button className="border-slate-200 border-solid border-2 px-4 py-2 rounded font-display font-semibold text-slate-700 hover:bg-slate-600 hover:text-white">
                Logout
              </button>
            ) : (
              <button className="border-slate-200 border-solid border-2 px-4 py-2 rounded font-display font-semibold text-slate-700 hover:bg-slate-600 hover:text-white">
                Login
              </button>
            )}
          </li>
        </ul>

       
      </div>
    </>
  );
};

export default Navbar;
