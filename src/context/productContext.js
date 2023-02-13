//import createContext and useContext hook from react
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { API_URL } from "../../contant";

import reducer from "../reducers/productReducer";

//create context using createContext
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  //all logic will be written here

  const initialState = {
    isLoading: false,
    isError: false,
    product: {},
    products: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const res = await axios.get(url);

      const data = res.data;
      console.log(data);

      dispatch({ type: "SET_DATA", payload: data });
    } catch (error) {
      dispatch({ type: "ERROR_DATA" });
    }
  };

  // API call for single product

  const getProduct = async (url) => {
    dispatch({ type: "SET_PRODUCT_LOADING" });
    try {
      const res = await axios.get(url);
      const product = await res.data;
      dispatch({ type: "SET_PRODUCT", payload: product });
    } catch (error) {
      dispatch({ type: "SET_PRODUCT_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API_URL);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, getProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

//create custom hook to use useContexthook

export const useProductContext = () => {
  return useContext(ProductContext);
};
