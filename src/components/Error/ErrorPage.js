import { Link } from "react-router-dom";
import img from "../../assest/Error.jpg";
import Button from "../../UI/Button";

const ErrorPage = () => {
  return (
    <>
      <div className="flex w-screen h-screen flex-col justify-center items-center space-y-8 font-display ">
        <img src={img} className="w-80 h-max" alt="" />
        <div className="flex justify-center flex-col items-center space-y-2">
          <h1 className="text-3xl text-slate-700 font-semibold">
            No Page Found
          </h1>
          <p className="text-slate-700 text-lg">
            Please Search with a different Value
          </p>
        </div>
        <Link to="/">
          <Button name={"Back To Home"} />
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
