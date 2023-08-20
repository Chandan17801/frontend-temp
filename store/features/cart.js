import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { _id: "64e1653d2b7c4412dc5d00af",image:"http://localhost:4001/files/uploads/img3.jpeg",name:"Kanchipuram Saree", quantity: 1, price: 2999 },
  { _id: "64e082a95d007620e05e13b4",image:"http://localhost:4001/files/uploads/img2.jpeg",name:"Banarasi Saree", quantity: 1, price: 2999 },
];

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
