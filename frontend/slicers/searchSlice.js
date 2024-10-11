import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search: '',          // The current search query
    showSearch: false,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
        state.search = action.payload;
      },
      setShowSearch: (state, action) => {
        state.showSearch = action.payload;
      },
  },
})


export const {setSearch, toggleShowSearch, setShowSearch  } = searchSlice.actions

export default searchSlice.reducer