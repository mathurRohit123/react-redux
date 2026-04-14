import { createSlice, nanoid } from '@reduxjs/toolkit';

// yehi obj neeche a state banta hai
const initialState = {
    todos: [{id: 1, text: "Hello redux"}]
};

// this is a slice (a broader version of reducer)
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        // property:function
        // context api mein somewhere fxn declaration and somewhere defination while here, declare and define @ same place
        // state: initial state ke kya haal hai
        // action: values jo reducer fxn mein use hongi
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload.text
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    }
});

// reducers are exported here
export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer