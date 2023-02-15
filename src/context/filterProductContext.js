import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import filterReducer from "../reducers/filterProductReducer";

const FilterProductContext = createContext();

export const FilterProductContextProvider = ({ children }) => {
  const initialState = {
    filterProduct: [],
    allProducts: [],
    gridView: true,
    listView: false,
  };
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(filterReducer, initialState);

  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_DATA", payload: products });
  }, [products]);

  return (
    <FilterProductContext.Provider
      value={{ ...state, setGridView, setListView }}
    >
      {children}
    </FilterProductContext.Provider>
  );
};
export const useFilterProductContext = () => {
  return useContext(FilterProductContext);
};
