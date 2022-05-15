import { configureStore } from "@reduxjs/toolkit";
import Rootreducer from "./CartReducer";
const Store  = configureStore({
    reducer: {
        cart: Rootreducer

    }
})
export default Store