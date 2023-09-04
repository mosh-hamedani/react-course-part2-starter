import { useReducer, useState } from "react";
import counterReducer from "./reducers/counterReducer";

const Counter = () => {
  // Now I call useReducer hook and call two arguments. The first argument is my reducer function, that is counterReducer.ts. The second argument is my initial state which in this case is zero.
  // Similar to useState hook, this hook returns an array with two elements. The first element is my current state, exactly like before. The second element is a function or triggering changes, called dispatch(means send)
  const [value, dispatch] = useReducer(counterReducer, 0);
  return (
    <div>
      Counter ({value})
      <button
        // NOW, I have another problem. If I have typo in the name of type and even If I use lowercase instead of uppercase, it will not work. BUT IN TS THERE IS AN eASY SOLUTION to fix it. GO TO counterReducer.ts > SOLUTION
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
