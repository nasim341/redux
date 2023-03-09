import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({

    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        SetCustom: (state, action) => {
            state.value = action.payload;
        }
    }

})
export const { increment, decrement, SetCustom } = counterSlice.actions;
export default counterSlice.reducer;