import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface Defect {

}

interface StateType {
  defects: Defect[];
}

const initialState: StateType = {
  defects: []
}


const defectsSlice = createSlice({
  name: 'defects',
  initialState,
  reducers: {
    addDefect(state, action: PayloadAction<Defect[]>) {
      console.log('asd')
    }
  }
})


export const { addDefect } = defectsSlice.actions;

export default defectsSlice.reducer;


