import useCounterStore from "./store";

const Counter = () => {
  const { counter, increment, reset } = useCounterStore();
  return (
    <div>
      Counter ({counter})
      <button
        // NOW, I have another problem. If I have typo in the name of type and even If I use lowercase instead of uppercase, it will not work. BUT IN TS THERE IS AN eASY SOLUTION to fix it. GO TO counterReducer.ts > SOLUTION
        onClick={() => increment()}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button onClick={() => reset()} className="btn btn-primary mx-1">
        Reset
      </button>
    </div>
  );
};

export default Counter;
