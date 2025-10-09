import { configureStore } from "@reduxjs/toolkit";
import defects from './defectsSlice';
import { useDispatch } from "react-redux";
export const store = configureStore({
  reducer: {
  defects
  }
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
