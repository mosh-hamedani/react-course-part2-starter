import { useReducer, useState } from "react";

// Two parameter: current state, and an action. Action is an object that describes what the user is trying to do. So a reducer takes the current state and an action and returns a new state.
// SOLVE COMPILATION ERRORS===> I should annotated those properties. How could I find the type of state? I use reducer to replace the useState hook. So i check the Counter.tsx and in there I set the state to number. Now, what about the action? there are no hard and fast rules(there are no fixed or definite rules or facts) for typing an action. I can use a simple string. BUT BY CONVENTION I use an object with a type property that describes the action. Like below

interface Action {
  // SOLUTION: I can change the type of the action from string to a union of literal values.
  //   SO I replace this:
  //   type: string;
  //   with:
  type: "INCREMENT" | "RESET";
}

// Moreover, I can annotate this function with a return value which is a number. Whit this if I made a mistake and return anythis else rather a number, TS compiler will yell at me. But as soon as I add :number in front of parenthesis I immediately see a compilation error, because now I'm not returning any values.
const counterReducer = (state: number, action: Action): number => {
  // Now, in this function, I check the type of action and return a new state
  if (action.type === "INCREMENT") return state + 1;
  if (action.type === "RESET") return 0;
  // what if the action is a different type ===> return Error or a value
  // throw new Error ('Action is not supported')
  // Whit TS in place I can prevent invalid actions, So throwing an error is really unnecessary. So I only return the current state.
  return state;
};

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
