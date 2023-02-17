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
        listView: false,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        listView: true,
        gridView: false,
      };

    case "SET_SORT_TYPE":
      return {
        ...state,
        sortType: action.payload,
      };

    case "SORT_PRODUCTS":
      let sortData;
      // let tempSortProduct = [...action.payload];

      const { filterProduct, sortType } = state;
      let tempSortProduct = [...filterProduct];

      const sortingProducts = (a, b) => {
        if (sortType === "lowest") {
          return a.price - b.price;
        }

        if (sortType === "highest") {
          return b.price - a.price;
        }

        if (sortType === "lowest-A-Z") {
          return a.name.localeCompare(b.name);
        }

        if (sortType === "highest-A-Z") {
          return b.name.localeCompare(a.name);
        }

        if (sortType === "all") {
          return tempSortProduct;
        }
      };

      sortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filterProduct: sortData,
      };

    case "GET_FILTER_TYPE":
      const { type, value } = action.payload;
      console.log("TYPE:", type, "VALUE:", value);

      return {
        ...state,
        filters: {
          ...state.filters,
          [type]: value,
        },
      };

    case "FILTER_PRODUCTS":
      const { allProducts } = state;
      let tempFilterProduct = allProducts;

      const { search, category, company, color } = state.filters;

      if (search) {
        tempFilterProduct = tempFilterProduct.filter((prod) => {
          return prod.name.toLowerCase().includes(search);
        });
        console.log("TEMP FIL", tempFilterProduct);
      }

      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (cat) => cat.category === category
        );
      }

      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (comp) => comp.company.toLowerCase() === company.toLowerCase()
        );
      }

      if (color != "all") {
        tempFilterProduct = tempFilterProduct.filter((col) =>
          col.colors.includes(color)
        );
      }

      return {
        ...state,
        filterProduct: tempFilterProduct,
      };

    default:
      return state;
  }
};

export default filterProductReducer;
