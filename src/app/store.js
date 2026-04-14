/***
 * Sabse se pehle store configure karo from core redux
 * Jo reducers yahan configure honge, store sirf unhi se values lekar state manage karega
 */
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "../features/Todo/todoSlice";

export const store = configureStore({
    reducer: todoReducer
});