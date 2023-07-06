import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    carts: [],
  },
  reducers: {
    setCarts: (state, actions) => {
      state.carts = actions.payload;
    },
  },
});

export default cartSlice.reducer;

export const { setCarts } = cartSlice.actions;
