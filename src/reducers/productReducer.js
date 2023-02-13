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

    case "ERROR_DATA":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_PRODUCT_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_PRODUCT":
      return {
        ...state,
        isLoading: false,
        product: action.payload,
      };

    case "SET_PRODUCT_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default productReducer;
