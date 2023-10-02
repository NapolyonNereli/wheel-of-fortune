import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./slice/colorSlice";

export const store = configureStore({
    reducer: {
        color: colorSlice,
    }
})