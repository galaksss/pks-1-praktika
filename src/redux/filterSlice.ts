import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  sortType: 1,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addDefect(state, action) {
      console.log('asd')
    }
  }
})


export const {  } = defectsSlice.actions;

export default filterSlice.reducer;


