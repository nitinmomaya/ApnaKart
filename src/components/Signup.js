import img from "../assest/Signup-Image.png";
import Input from "../UI/Input";
const Signup = ({ setIsLogin, isLogin }) => {
  return (
    <>
      <div className="  w-full  flex md:flex-row flex-col  md:justify-center h-screen space-y-4">
        <div className="md:w-1/2 bg-slate-50 flex flex-col items-center justify-center h-screen py-8">
          <img className="w-96 h-96 py-4 px-10" src={img} alt="" />
          <div className=" flex flex-col space-y-2 items-center px-10">
            <h1 className="font-display text-4xl font-bold text-slate-700 text-center">
              Welcome to ApnaMart
            </h1>
            <p className="text-xl text-center">
              Find 5000+ products and get speedy delivery on time
            </p>
          </div>
        </div>
        <div className="md:w-1/2  w-full flex flex-col  md:justify-center h-screen px-10 space-y-4">
          <div className="content">
            <div className="header flex justify-between">
              <h1 className="text-3xl font-display font-semibold">
                Signup Page
              </h1>
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                }}
                className="border-slate-600 border-solid border-2 px-4 py-2 rounded font-display font-semibold text-slate-600"
              >
                Login
              </button>
            </div>
            <p className="font-display py-2">
              Signup to get assured product delivered on time
            </p>
          </div>

          <div className="w-full space-y-4">
            <Input label={"Name"} placeholder={"Enter Name"} type={"text"} />
            <Input label={"Email"} placeholder={"Enter Email"} type={"email"} />
            <Input
              label={"Password"}
              placeholder={"Enter Password"}
              type={"password"}
            />
            <button className="w-full bg-slate-700 text-gray-50 font-display font-semibold px-6 py-3 rounded">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
