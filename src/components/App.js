import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
// import Home from "../components/Home";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
//Lazy Load components for optimization
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./Home"));
const Navbar = lazy(() => import("./Navbar"));
const Footer = lazy(() => import("./Footer"));
const ProductLists = lazy(() => import("./ProductList/ProductLists"));
const About = lazy(() => import("./About"));
const ProductDetail = lazy(() => import("./ProductDetails/ProductDetail"));
const Cart = lazy(() => import("./Cart/Cart"));
const ErrorPage = lazy(() => import("./Error/ErrorPage"));

const Signup = lazy(() => import("./Signup"));

//<---Creating Routing Configuration--->
import { createBrowserRouter, Outlet } from "react-router-dom";
import Shimmer from "./shimmer/Shimmer";
import ProductShimmer from "./shimmer/ProductShimmer";

const App = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col min-h-screen">
        <Suspense>
          <Navbar />
        </Suspense>

        <Outlet />

        <Suspense>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: (
      <Suspense>
        <ErrorPage />
      </Suspense>
    ),
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense>
            {" "}
            <Home />
          </Suspense>
        ),
      },

      {
        path: "/product/:id",
        element: (
          <Suspense fallback={<ProductShimmer />}>
            <ProductDetail />
          </Suspense>
        ),
      },

      {
        path: "/cart",
        element: (
          <Suspense>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/products",
        element: (
          <Suspense>
            <ProductLists />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: (
      <Suspense>
        <Signup />
      </Suspense>
    ),
  },
]);
export default App;
