import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../constants";

const cartItem = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const found = state.find((i) => i.product.id === action.payload.product.id);
      if (found) {
        //Sepette varsa quantity artır
        const updated = { ...found, quantity: found.quantity + 1 };
        const newBasket = state.map((i) => (i.product.id === updated.product.id ? updated : i));
        return newBasket;
      } else {
        //Sepette yoksa yeni ekle
        return [...state, action.payload];
      }
    case REMOVE_FROM_CART:
      const foundDelete = state.find((i) => i.product.id === action.payload.id);
      if (foundDelete.quantity > 1) {
        const updatedDelete = { ...foundDelete, quantity: foundDelete.quantity - 1 };
        const newBasketDelete = state.map((i) => (i.product.id === updatedDelete.product.id ? updatedDelete : i));
        return newBasketDelete;
      } else {
        return state.filter((cartItem) => cartItem.product.id !== action.payload.id);
      }

    case CLEAR_CART:
      return (state = []);
  }
  return state;
};

export default cartItem;
