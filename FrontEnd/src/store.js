import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlicer";
import cartSlice from "./features/cartSlicer";





export const store = configureStore({
    reducer: {
        user: userSlice,
        cart: cartSlice,
    },
})
