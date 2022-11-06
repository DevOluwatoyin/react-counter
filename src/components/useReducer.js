import { useReducer } from "react";
import { Helmet } from "react-helmet-async";

function setReducer(State, action) {
  if (action.type === "increment") {
    return State + 5;
  } else if (action.type === "decrement") {
    return State - 1;
  } else if (action.type === "reset") {
    return (State = 0);
  } else {
    return State;
  }
}

function CounterApp() {
  const [count, dispatch] = useReducer(setReducer, 2);

  return (
    <>
      <Helmet>
        <title>My counter app using useReducer</title>
        <link href="./useReducer.js" />
      </Helmet>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default CounterApp;
