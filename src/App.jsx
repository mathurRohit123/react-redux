import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './store/counterSlice';
// import Todo from "./components/Todo";
// import AddTodo from "./components/AddTodo";

function App() {

  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <>
      {/* <AddTodo></AddTodo> */}
      {/* <Todo></Todo> */}
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#172842",
        color: "white",
      }} >
        <div style={{
          padding: '2rem',
          borderRadius: "0.5rem",
          background: '#1f2937',
          textAlign: "center",
          minWidth: '260px'
        }} >
          <h1 style={{ marginBottom: "1rem" }} >Redux Counter</h1>

          <div style={{
            fontSize: "3rem",
            marginBottom: "1.5rem"
          }}>
            { count }
          </div>

          <div style={{
            display: "flex",
            gap: "0.5rem",
            justifyContent: "center"
          }} >
            <button onClick={() => dispatch(decrement())} style={{
              padding: "0.5rem 1rem",
              borderRadius: "0.25rem",
              border: "none",
              background: "#ef4444",
              color: "white",
              cursor: "pointer"
            }}> -1 </button><br />
            <button onClick={() => dispatch(reset())} style={{
              padding: "0.5rem 1rem",
              borderRadius: "0.25rem",
              border: "none",
              background: "#9ca3af",
              color: "black",
              cursor: "pointer",
            }}> Reset </button><br />
            <button onClick={() => dispatch(increment())} style={{
              padding: "0.5rem 1rem",
              borderRadius: "0.25rem",
              border: "none",
              background: "#22c55e",
              color: "black",
              cursor: "pointer"
            }}> +1 </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
