import { appRouter } from "./src/components/App";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { UserAuthContextProvider } from "./src/context/UserAuth";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <UserAuthContextProvider><RouterProvider router={appRouter} /></UserAuthContextProvider>);
