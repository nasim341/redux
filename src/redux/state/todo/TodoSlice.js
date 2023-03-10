import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todoL",
    initialState: {
        value: []
    },
    reducers: {
        AddTodo: (state, action) => {
            state.value.push(action.payload);
        },
        RemoveTodo: (state, action) => {
            state.value.slice(action.payload, 1)
        },
        EditTodo: (state, action) => {
            state.value.slice(action.payload['index'], 1, action.payload['task'])
        }
    }
})
export const { AddTodo, RemoveTodo, EditTodo } = todoSlice.reducer;
export default todoSlice.reducer;