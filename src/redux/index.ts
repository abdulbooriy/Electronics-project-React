import { configureStore } from "@reduxjs/toolkit";
import electronicsReducer from "./features/electronics.slice";

export const store = configureStore({
  reducer: {
    electronics: electronicsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
