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
    sortType: "all",

    // creating filter objects of all filter type
    filters: {
      search: "",
      category: "all",
      company: "all",
      color: "all",
      maxPrice: 0,
      price: 0,
      minPrice: 0,
    },
  };
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(filterReducer, initialState);

  //Setting Views Starts

  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };
  // Setting Views End

  //Identifing Sort type
  const sort = (sortValue) => {
    dispatch({ type: "SET_SORT_TYPE", payload: sortValue });
  };

  // Identify FilterType and Value

  const filterType = (type, value) => {
    return dispatch({ type: "GET_FILTER_TYPE", payload: { type, value } });
  };

  //Sort the product after sortType Changes
  useEffect(() => {
    console.log("DROPDOWN VALUE CHANGED :))");
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [state.sortType, state.filters]);

  //Render Data based on each filter changes
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_DATA", payload: products });
  }, [products]);

  return (
    <FilterProductContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        setGridView,
        sort,
        filterType,
      }}
    >
      {children}
    </FilterProductContext.Provider>
  );
};
export const useFilterProductContext = () => {
  return useContext(FilterProductContext);
};
