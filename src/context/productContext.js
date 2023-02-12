//import createContext and useContext hook from react
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { API_URL } from "../../contant";
import HomeProduct from "../components/HomeProduct";
import reducer from "../reducers/productReducer";

//create context using createContext
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  //all logic will be written here

  const initialState = {
    isLoading: false,
    isError: false,
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

  useEffect(() => {
    getProducts(API_URL);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};

//create custom hook to use useContexthook

export const useProductContext = () => {
  return useContext(ProductContext);
};
