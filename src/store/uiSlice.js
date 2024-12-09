import { createSlice } from "@reduxjs/toolkit";

const cartUiState = {
  showCart: false,
  notification: null,
};
export const uiSlice = createSlice({
  name: "ui",
  initialState: cartUiState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        state: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiSliceActions  = uiSlice.actions;
