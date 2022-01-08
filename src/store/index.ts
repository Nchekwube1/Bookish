import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import sideSlice from "../components/sidebar/sideSlice"
import homeSlice from '../components/home/homeSlice'
const store = configureStore({
  reducer: {
    sideSlice,
    homeSlice
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() 
export default store