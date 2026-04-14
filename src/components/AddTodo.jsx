import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '../features/Todo/todoSlice';

// Dispatch ek reducer ko use karte hue store ko change karta hai

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = () => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    };

    return(
        <>
            <h1>Add Todo</h1>
            <form onSubmit={addTodoHandler}>
                <input type="text" placeholder="Enter a todo" value={input} onChange={(e) =>  {
                    setInput(e.target.value);
                }} />
                <button style={{cursor: 'pointer'}} type="submit">{'➕'}</button>
            </form>
        </>
    );
}

export default AddTodo;