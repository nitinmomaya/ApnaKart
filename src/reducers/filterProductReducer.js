const filterProductReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_DATA":
      return {
        ...state,
        filterProduct: [...action.payload],
        allProducts: [...action.payload],
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        gridView: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        listView: true,
      };

    default:
      return state;
  }
};

export default filterProductReducer;
