const Login = lazy(() => import("./Login"));
const ProtectedRoute = lazy(() => import("./ProtectedRoute"));

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

import ProductShimmer from "./shimmer/ProductShimmer";
import Shimmer from "./shimmer/Shimmer";

const App = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col min-h-screen">
        <Suspense fallback={<Shimmer />}>
          <Navbar />
        </Suspense>

        <Outlet />

        <Suspense fallback={<Shimmer />}>
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
      <Suspense fallback={<Shimmer />}>
        <ErrorPage />
      </Suspense>
    ),
    element: (
      <Suspense fallback={<Shimmer />}>
        <ProtectedRoute>
          <App />
        </ProtectedRoute>
      </Suspense>
    ),
    children: [
      {
        path: "about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<Shimmer />}>
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
    element: (
      <Suspense>
        <Login />
      </Suspense>
    ),
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
