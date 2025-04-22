import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the state directly here
      state.items.push(action.payload);
    },
    removeitem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    }
  }
})

export const { addItem, removeitem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;