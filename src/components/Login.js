import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assest/Signup-Image.png";
import { useUserAuth } from "../context/UserAuth";
import GoogleSignIn from "../UI/GoogleSignin";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Your Email"),
  password: Yup.string().min(4).required("Please Enter your Password"),
});

import Input from "../UI/Input";
const Login = () => {
  const [error, setError] = useState("");

  const { user, login } = useUserAuth();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,

      onSubmit: async (values, action) => {
        console.log("values:", values);
        setError("");
        try {
          await login(values.email, values.password);
          navigate("/");
        } catch (err) {
          setError(err.message);
        }
        action.resetForm();
      },
    });
  return (
    <>
      <div className="  w-full  flex md:flex-row flex-col  md:justify-center h-screen space-y-4">
        <div className="md:w-1/2 bg-slate-50 flex flex-col items-center justify-center h-screen py-8">
          <img className="w-96 h-96 py-4 px-10" src={img} alt="" />
          <div className=" flex flex-col space-y-2 items-center px-10">
            <h1 className="font-display text-4xl font-bold text-slate-700 text-center">
              Welcome to ApnaKart
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
                Login Page
              </h1>
              <Link to="/signup">
                <button className="border-slate-600 border-solid border-2 px-4 py-2 rounded font-display font-semibold text-slate-600">
                  Signup
                </button>
              </Link>
            </div>
            <p className="font-display py-2">
              Login to get assured product delivered on time
            </p>
            {error && (
              <p className="text-red-500 font-display font-semibold">{error}</p>
            )}
          </div>

          <div className="w-full space-y-4">
            <GoogleSignIn title={"Signin With Google"} />
            <form onSubmit={handleSubmit}>
              <Input
                label={"Email"}
                placeholder={"Enter Email"}
                type={"email"}
                name={"email"}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.email}
                touched={touched.email}
              />
              <Input
                label={"Password"}
                placeholder={"Enter Password"}
                type={"password"}
                icon={true}
                name={"password"}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.password}
                touched={touched.password}
              />
              <button
                type="submit"
                className="w-full bg-slate-700 text-gray-50 font-display font-semibold px-6 py-3 rounded"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
