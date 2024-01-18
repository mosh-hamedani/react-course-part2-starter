import { useReducer, useState } from "react";
import counterReducers from "./Reducers/counterReducers";

const Counter = () => {
  const [value, dispatch] = useReducer(counterReducers, 0);

  return (
    <div>
      Counter ({value})
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "RESET" })}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
