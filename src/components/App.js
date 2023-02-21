import Login from "./Login";
import Signup from "./Signup";
import ProtectedRoute from "./ProtectedRoute";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import ProductLists from "./ProductLists";

//<---Creating Routing Configuration--->
import { createBrowserRouter, Outlet } from "react-router-dom";

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
        path: "/product/:id",
        element: <ProductDetail />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products",
        element: <ProductLists />,
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
