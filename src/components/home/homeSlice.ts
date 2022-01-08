import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { bookType } from "../../constants/constants";
type SliceState = { books: bookType[] }
const initialState: SliceState = { books:[]}
const slice = createSlice({
  name: 'sideSlice',
  initialState,
  reducers: {
    setBook(state, {payload}: PayloadAction<SliceState>){state.books = payload.books},
  },
})
export const {setBook} = slice.actions
export default slice.reducer