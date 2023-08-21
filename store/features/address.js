import { createSlice } from "@reduxjs/toolkit";

let persistenceState;
if (typeof window !== "undefined") {
  persistenceState = localStorage.getItem("addresses")
    ? JSON.parse(localStorage.getItem("addresses"))
    : null;
}
const initialState = persistenceState
  ? persistenceState
  : {
      addresses: [
        {
          id: 1,
          local: "Street: 2, The Mall, Station Road, Malad (west)",
          city: "Mumbai",
          state: "Maharastra",
          phone: 123456,
          zip: "400064",
          country: "India",
          countryCode: +91,
        },
        {
          id: 2,
          local: "Street: 2, The Mall, Station Road, Malad (west)",
          city: "Mumbai",
          state: "Maharastra",
          phone: 123456,
          zip: "400064",
          country: "India",
          countryCode: +91,
        },
        {
          id: 3,
          local: "Street: 2, The Mall, Station Road, Malad (west)",
          city: "Mumbai",
          state: "Maharastra",
          phone: 123456,
          zip: "400064",
          country: "India",
          countryCode: +91,
        },
      ],
    };

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    addAddress: (state, action) => {
      state.addresses.push(action.payload);
      localStorage.setItem("addresses", JSON.stringify(state));
    },
  },
});

export const { addAddress } = addressSlice.actions;

export default addressSlice.reducer;
