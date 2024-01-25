import { createSlice } from "@reduxjs/toolkit";

// Define a function to get the initial basket from local storage or initialize it as an empty array
const getInitialBasket = () => {
  const savedCart = JSON.parse(localStorage.getItem("cart"));
  return Array.isArray(savedCart) ? savedCart : [];
};

const getTotalQty = () => {
  const savedCart = JSON.parse(localStorage.getItem("cart"));
  let totalQty=0;
  savedCart?.forEach(item => {
    totalQty+=item.qty;
  });
  return totalQty;
};

const cartSlice = createSlice({
  name: "userCart",
  initialState: {
    totalQty:getTotalQty(),
    basket: getInitialBasket(),
  },
  reducers: {
    addToBasket: (state, action) => {
      const newItem = action.payload.basket;

      // Find the index of the item with the same id in the basket
      const itemIndex = state.basket.findIndex((item) => item.id === newItem.id);

      if (itemIndex !== -1) {
        // If the item is already in the basket, update its quantity
        state.basket[itemIndex].qty += 1;
      } else {
        // If the item is not in the basket, add it with a quantity of 1
        state.basket.push({ ...newItem, qty: 1 });
      }
      state.totalQty +=1;
      // Update the cart in local storage
      localStorage.setItem("cart", JSON.stringify(state.basket));
    },
    removeFromBasket: (state, action) => {
      const itemIdToRemove = action.payload.itemId;

      // Filter out the item with the specified id from the basket
      state.basket = state.basket.filter((item) => item.id !== itemIdToRemove);

      // Update the cart in local storage
      localStorage.setItem("cart", JSON.stringify(state.basket));
    },
  },
});

export const { addToBasket, removeFromBasket } = cartSlice.actions;
export default cartSlice.reducer;
