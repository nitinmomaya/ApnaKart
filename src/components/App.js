import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

//<---Creating Routing Configuration--->
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
export default Home;
