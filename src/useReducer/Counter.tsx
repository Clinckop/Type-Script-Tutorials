import React, { useReducer } from "react";

const intialstate = { count: 0 };

type CounterType = {
  count: number;
};
type ActionType = {
  type: string;
  payload: number;
};

function reducer(state: CounterType, action: ActionType) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, intialstate);

  return (
    <>
      Count : {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment by 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement by 10
      </button>
    </>
  );
};
export default Counter;
