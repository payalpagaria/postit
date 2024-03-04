import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slice/postSlice";
export const store = configureStore({
    reducer:{
        post:postSlice,
    }
})