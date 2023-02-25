import { useFormik } from "formik";
import img from "../assest/Signup-Image.png";
import Input from "../UI/Input";
import * as Yup from "yup";
import { auth, useUserAuth } from "../context/UserAuth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import GoogleSignIn from "../UI/GoogleSignin";
import Button from "../UI/Button";

const validationSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please Enter Your Name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(4).required("Please Enter your Password"),
  confirm_password: Yup.string()
    .required("Please Re-Enter your Password")
    .oneOf([Yup.ref("password"), null], "Password must Match"),
});
const Signup = () => {
  const [error, setError] = useState("");

  const { signup } = useUserAuth();
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values, action) => {
        handleSignup(values.email, values.password, values.name);

        action.resetForm();
      },
    });

  const handleSignup = async (email, password, name) => {
    setError("");
    try {
      await signup(email, password);
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

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
                Signup Page
              </h1>
              <Link to="/login">
                <button className="border-slate-600 border-solid border-2 px-4 py-2 rounded font-display font-semibold text-slate-600">
                  Login
                </button>
              </Link>
            </div>
            <p className="font-display py-2">
              Signup to get assured product delivered on time
            </p>
            {error && (
              <p className="text-red-500 font-display font-semibold">{error}</p>
            )}
          </div>

          <div className="w-full space-y-4">
            <GoogleSignIn title={"Signup With Google"} />
            <form onSubmit={handleSubmit}>
              <Input
                label={"Name"}
                placeholder={"Enter Name"}
                type={"text"}
                name={"name"}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.name}
                touched={touched.name}
              />
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
              <Input
                label={"Confirm Password"}
                placeholder={"Enter Password"}
                type={"password"}
                icon={true}
                name={"confirm_password"}
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.confirm_password}
                touched={touched.confirm_password}
              />
              <Button type={"submit"} name={"Sign Up"} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
