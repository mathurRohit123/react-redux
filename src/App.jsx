import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmt } from "./store/counterSlice";

function App() {
  const [input, setInput] = useState("");
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  function handleIncreaseByAmt() {
    const value = Number(input);

    if (Number.isNaN(value) || input.trim() === "") {
      alert("Please enter a number");
      return;
    }

    dispatch(incrementByAmt(value));
    setInput("");
  }

  return (
    <div className="app-root">
      <div className="counter-card">
        <h1 className="counter-title">Redux Counter</h1>

        <div className="counter-value">{count}</div>

        <div className="counter-buttons">
          <button
            onClick={() => dispatch(decrement())}
            className="btn btn-decrement"
          >
            -1
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="btn btn-reset"
          >
            Reset
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="btn btn-increment"
          >
            +1
          </button>
        </div>

        <div className="counter-input-row">
          <input
            type="text"
            name="increaseByAmt"
            id="increaseByAmt"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="counter-input"
            placeholder="Enter amount"
          />
          <button
            type="button"
            onClick={handleIncreaseByAmt}
            className="btn btn-amount"
          >
            Add amount
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;