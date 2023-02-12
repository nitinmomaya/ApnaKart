const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_DATA":
      const product = action.payload;
      console.log("REDUCER_PRODUCT", product);
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: product,
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default productReducer;
