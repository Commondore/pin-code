import { configureStore } from "@reduxjs/toolkit";
import pinReducer from "./pin.reducer";

export const store = configureStore({
  reducer: pinReducer,
});

export type PinStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
