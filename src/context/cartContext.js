import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/cartReducer";

const CartContext = createContext();

const getCartData = () => {
  let cartData = localStorage.getItem("cartItem");
  console.log("cartData", cartData);
  if (cartData === null) {
    return [];
  } else {
    return JSON.parse(cartData);
  }
};

console.log("CART LCOAL", getCartData());

const initialState = {
  cart: getCartData(),
  totalItem: "",
  totalPrice: "",
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, quantity, company, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, color, quantity, company, product },
    });
  };

  // increment and decrement the product

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREASE", payload: id });
  };

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREASE", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    dispatch({ type: "CART_TOTAL_PRICE" });
    localStorage.setItem("cartItem", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        setDecrease,
        setIncrease,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
