import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import filterReducer from "../reducers/filterProductReducer";

const FilterProductContext = createContext();

export const FilterProductContextProvider = ({ children }) => {
  const initialState = {
    filterProduct: [],
    allProducts: [],
    listView: true,
    gridView: false,
    sortType: "highest",
  };
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(filterReducer, initialState);

  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  const sort = (sortValue) => {
    dispatch({ type: "SET_SORT_TYPE", payload: sortValue });
  };

  //Sort the product after sortType Changes
  useEffect(() => {
    console.log("DROPDOWN VALUE CHANGED :))");
    dispatch({ type: "SORT_PRODUCTS", payload: products });
  }, [state.sortType]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_DATA", payload: products });
  }, [products]);

  return (
    <FilterProductContext.Provider
      value={{ ...state, setGridView, setListView, setGridView, sort }}
    >
      {children}
    </FilterProductContext.Provider>
  );
};
export const useFilterProductContext = () => {
  return useContext(FilterProductContext);
};
