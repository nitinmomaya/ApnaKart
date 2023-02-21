import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/cartReducer";

const CartContext = createContext();

const initialState = {
  cart: [],
  totalItem: "",
  totalPrice: "",
  shippingFee: 70000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, quantity, company, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, color, quantity, company, product },
    });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
