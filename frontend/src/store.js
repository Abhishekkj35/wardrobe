import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slicers/cartSlice';
import productReducer from '../slicers/productSlice';
import tokenReducer from '../slicers/tokenSlice';
import searchReducer from '../slicers/searchSlice'


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    token: tokenReducer,
    search: searchReducer
  },
});


