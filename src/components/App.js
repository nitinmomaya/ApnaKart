import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

//<---Creating Routing Configuration--->
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import ProtectedRoute from "./ProtectedRoute";

const Home = () => {
  
  return (
    <>
      <Navbar />
      <h1>This is HomePage</h1>
      <Outlet />
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><Home /></ProtectedRoute>,
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
