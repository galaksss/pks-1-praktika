import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from './projectsSlice'
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
export const store = configureStore({
  reducer: {
  projectsSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector