import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching products
const backendUrl=import.meta.env.VITE_BACKEND_URL
export const fetchProducts = createAsyncThunk(
  
  'product/fetchProducts',
  async ( { rejectWithValue }) => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        return response.data.data; // Return the product data if successful
      } else {
        return rejectWithValue(response.data.message); // Return the error message
      }
    } catch (error) {
      return rejectWithValue(error.message); // Return error if API call fails
    }
  }
);

const initialState = {
  products: [],
  status: 'idle',  // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload; // Store the fetched products
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload; // Store the error message
      });
  },
});

export default productSlice.reducer;
