import { appRouter } from "./src/components/App";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { UserAuthContextProvider } from "./src/context/UserAuth";
import { ProductProvider } from "./src/context/productContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductProvider>
    <UserAuthContextProvider>
      <RouterProvider router={appRouter} />
    </UserAuthContextProvider>
  </ProductProvider>
);
