import { appRouter } from "./src/components/App";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { UserAuthContextProvider } from "./src/context/UserAuth";
import { ProductProvider } from "./src/context/productContext";
import { FilterProductContextProvider } from "./src/context/filterProductContext";
import { CartProvider } from "./src/context/cartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserAuthContextProvider>
    <ProductProvider>
      <FilterProductContextProvider>
        <CartProvider>
          <RouterProvider router={appRouter} />
        </CartProvider>
      </FilterProductContextProvider>
    </ProductProvider>
  </UserAuthContextProvider>
);
