import { createSlice } from "@reduxjs/toolkit";

let persistenceState;
if (typeof window !== "undefined") {
  persistenceState = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : null;
}

const initialCartState = persistenceState
  ? persistenceState
  : {
      items: [
        {
          _id: "64e1653d2b7c4412dc5d00af",
          image: "uploads/img3.jpeg",
          name: "Kanchipuram Saree",
          quantity: 1,
          price: 2999,
        },
        {
          _id: "64e082a95d007620e05e13b4",
          image: "uploads/img2.jpeg",
          name: "Banarasi Saree",
          quantity: 1,
          price: 2999,
        },
      ],
      subtotal: 5998,
    };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    add_to_cart: (state, action) => {
      const existingData = state.items.find(
        (props) => props._id === action.payload._id
      );
      if (existingData) {
        existingData.quantity++;
      } else {
        state.items.push(action.payload);
      }
      state.subtotal += action.payload.price;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const existingData = state.items.find(
        (props) => props._id === action.payload
      );
      if (existingData) {
        state.subtotal -= existingData.price * existingData.quantity;
        state.items = state.items.filter(
          (props) => props._id !== action.payload
        );
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    reduceFromCart: (state, action) => {
      const existingData = state.items.find(
        (props) => props._id === action.payload
      );
      if (existingData && existingData.quantity != 1) {
        existingData.quantity--;
      } else {
        state.items = state.items.filter(
          (props) => props._id !== action.payload
        );
      }
      state.subtotal -= existingData.price;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { add_to_cart, removeFromCart, reduceFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
