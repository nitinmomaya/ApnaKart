import Login from "./Login";
import Signup from "./Signup";
import ProtectedRoute from "./ProtectedRoute";

import Navbar from "./Navbar";
import Footer from "./Footer";

//Lazy Load components for optimization
import { lazy, Suspense } from "react";
const ProductLists = lazy(() => import("./ProductLists"));
const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));
const ProductDetail = lazy(() => import("./ProductDetail"));
const Cart = lazy(() => import("./Cart"));
const ErrorPage = lazy(() => import("./Error/ErrorPage"));

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
            <Home />
          </Suspense>
        ),
      },

      {
        path: "/product/:id",
        element: (
          <Suspense>
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
    element: <Signup />,
  },
]);
export default App;
