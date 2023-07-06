import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
    selectedProduct: {},
    filteredProducts: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
  },
});

export default productSlice.reducer;

export const { setProducts, setSelectedProduct, setFilteredProducts } =
  productSlice.actions;
