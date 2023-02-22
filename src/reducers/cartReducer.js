const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, quantity, product } = action.payload;

    let existingProduct = state.cart.find((item) => item.id === id + color);

    if (existingProduct) {
      let updatedProduct = state.cart.map((item) => {
        if (item.id === id + color) {
          let newQuantity = item.quantity + quantity;

          if (newQuantity >= item.max) {
            newQuantity = item.max;
          }
          return {
            ...item,
            quantity: newQuantity,
          };
        } else {
          return item;
        }
      });

      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        quantity,
        company: product.company,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  // to set the increment and decrement
  if (action.type === "SET_DECREASE") {
    let updatedProduct = state.cart.map((item) => {
      if (item.id === action.payload) {
        let decQuantity = item.quantity - 1;

        if (decQuantity <= 1) {
          decQuantity = 1;
        }

        return {
          ...item,
          quantity: decQuantity,
        };
      } else {
        return item;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREASE") {
    let updatedProduct = state.cart.map((item) => {
      if (item.id === action.payload) {
        let incQuantity = item.quantity + 1;

        if (incQuantity >= item.max) {
          incQuantity = item.max;
        }

        return {
          ...item,
          quantity: incQuantity,
        };
      } else {
        return item;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let { totalItem, totalPrice } = state.cart.reduce(
      (accum, itemPrice) => {
        let { price, quantity } = itemPrice;

        accum.totalItem += quantity;
        accum.totalPrice += price * quantity;

        return accum;
      },
      {
        totalItem: 0,
        totalPrice: 0,
      }
    );
    return {
      ...state,
      totalItem,
      totalPrice,
    };
  }

  return state;
};

export default cartReducer;
