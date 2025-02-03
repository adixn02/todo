import { configureStore } from "@reduxjs/toolkit";
import todoList from "./slice/todoslice"


const store = configureStore({
    reducer:{
        todo:todoList
    }
})

export default store