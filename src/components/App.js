import Login from "./Login";
import Signup from "./Signup";

//<---Creating Routing Configuration--->
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import ProtectedRoute from "./ProtectedRoute";

import Footer from "./Footer";
import Home from "./Home";

const App = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col min-h-screen">
        <Navbar />

        <Outlet />

        <Footer />
      </div>
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/",
        element: <Home />,
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
export default App;
