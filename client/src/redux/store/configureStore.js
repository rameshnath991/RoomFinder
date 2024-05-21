import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../reducerSlices/boxSlice";
import boxSlice from "../reducerSlices/boxSlice";
const store = configureStore ({
    reducer: {
        counter: counterSlice,
        box: boxSlice
    }
})
export default store