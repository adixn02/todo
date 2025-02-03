import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react";

const todoList = createSlice({
    name:"todo",
    initialState:{
        list:[]
    },
    reducers:{
        addTask:(state,action)=>{
state.list.push(action.payload)
        },
        clearTask:(state)=>{
state.list = []
        }
    }
})

export const {addTask,clearTask} = todoList.actions

export default todoList.reducer