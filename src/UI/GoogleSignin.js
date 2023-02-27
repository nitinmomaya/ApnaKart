import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assest/Google-Logo.png";
import { useUserAuth } from "../context/UserAuth";

const GoogleSignIn = ({ title }) => {
  const { googleSignIn } = useUserAuth();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const signin = async (e) => {
    e.preventDefault();

    try {
      await googleSignIn();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <button
        onClick={signin}
        className="w-full flex space-x-4 justify-center items-center border-neutral-300 border-solid border-[1px] px-4 py-2 rounded font-display font-semibold text-slate-600"
      >
        <img loading="lazy" className="w-8 h-8 mx-2" src={img} />
        {title}
      </button>
      <div className="flex w-full justify-evenly items-center ">
        <div className=" w-full h-[1px] bg-neutral-300"></div>{" "}
        <div className="mx-4 font-display">OR</div>{" "}
        <div className=" w-full h-[1px] bg-neutral-300"></div>
      </div>
      {error && (
        <p className="text-red-500 font-display font-semibold">{error}</p>
      )}
    </>
  );
};

export default GoogleSignIn;
