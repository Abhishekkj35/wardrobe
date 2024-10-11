import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: {},
  cartAmount: 0,
  cartCount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, size, quantity } = action.payload;

      // Check if the item already exists in the cart
      if (state.cartItems[productId]) {
        // Update quantity for the existing item
        if (state.cartItems[productId][size]) {
          state.cartItems[productId][size] += quantity; // Increase the quantity
        } else {
          state.cartItems[productId][size] = quantity; // Set the size quantity
        }
      } else {
        // Add new item to the cart
        state.cartItems[productId] = { [size]: quantity };
      }

      // Update cart count and amount after adding item
      state.cartCount += quantity;
      state.cartAmount += action.payload.price * quantity; // Assuming price is provided in action
    },

    updateQuantity: (state, action) => {
      const { productId, size, quantity } = action.payload;

      // Update quantity and recalculate cartAmount and cartCount
      if (state.cartItems[productId] && state.cartItems[productId][size]) {
        const oldQuantity = state.cartItems[productId][size];
        const price = action.payload.price; // Assuming price is passed in the action

        // Update quantity
        state.cartItems[productId][size] = quantity;

        // Recalculate total cart amount and count
        state.cartAmount += (quantity - oldQuantity) * price;
        state.cartCount += (quantity - oldQuantity);
      }
    },

    getCartCount: (state) => {
      return state.cartCount;
    },

    getCartAmount: (state) => {
      return state.cartAmount;
    },

    removeFromCart: (state, action) => {
      const { productId, size } = action.payload;

      // Remove item from cart
      if (state.cartItems[productId]) {
        const quantity = state.cartItems[productId][size];

        // Update cartAmount and cartCount
        state.cartAmount -= quantity * action.payload.price; // Assuming price is provided in action
        state.cartCount -= quantity;

        delete state.cartItems[productId][size]; // Remove size from product
        if (Object.keys(state.cartItems[productId]).length === 0) {
          delete state.cartItems[productId]; // Remove product if no sizes left
        }
      }
    },

    clearCart: (state) => {
      state.cartItems = {};
      state.cartAmount = 0;
      state.cartCount = 0;
    }
  },
});

// Export actions
export const {
  addToCart,
  updateQuantity,
  getCartCount,
  getCartAmount,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;
