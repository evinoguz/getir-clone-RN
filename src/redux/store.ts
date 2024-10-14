import { applyMiddleware, combineReducers, createStore } from "redux";
import cartItem from "./reducers/cartItem";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  cartItems: cartItem,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
