import { configureStore, createSlice } from "@reduxjs/toolkit";
import openSocket from "socket.io-client";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuth: false,
    socket: openSocket("https://backend-wbd-node.onrender.com"),
    backend: "https://backend-wbd-node.onrender.com"
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isAuth = action.payload.isAuth;
    },
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
    }
  },
});

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export const userActions = userSlice.actions;
export default store;
