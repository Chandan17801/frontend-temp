import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart";
import addressReducer from "./features/address";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    address: addressReducer,
  },
});
