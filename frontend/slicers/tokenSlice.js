import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = '';
    }
  },
});

export const { setToken, clearToken } = tokenSlice.actions;

// Thunk to get the token from localStorage
export const getTokenFromLocalStorage = () => (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    dispatch(setToken(token));
  }
};

export default tokenSlice.reducer;
