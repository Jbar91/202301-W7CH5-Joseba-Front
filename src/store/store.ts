import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../reducer/user/user.reducer";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
