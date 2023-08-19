import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add_to_cart: (state, { payload }) => {},
    removeFromCart: (state, { oayload }) => {},
  },
});

export const { add_to_cart, removeFromCart } = cart.actions;

export default cart.reducer;
