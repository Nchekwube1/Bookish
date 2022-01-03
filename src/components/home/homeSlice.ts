import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type SliceState = { index: number }
const initialState: SliceState = { index:0  }
const slice = createSlice({
  name: 'sideSlice',
  initialState,
  reducers: {
    indexChange(state, {payload}: PayloadAction<SliceState>){state.index = payload.index},
  },
})
export const {indexChange} = slice.actions
export default slice.reducer