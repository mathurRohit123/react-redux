import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/Todo/todoSlice';

function Todo() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    return(
        <>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    <button type="button" onClick={() => dispatch(removeTodo(todo.id))}>{"❌"}</button>
                </li>
                
            ))}
        </>
    );
}

export default Todo;