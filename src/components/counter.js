import React from "react";
import { Helmet } from "react-helmet-async";

function Counter() {
  const [value, setValue] = React.useState(1);
  const Click1 = () => {
    setValue(value + 1);
  };
  const Click2 = () => {
    setValue(value - 1);
  };

  const Click3 = () => {
    setValue(0);
  };
  return (
    <>
      <Helmet>
        <title>My counter app using custom hooks</title>
        <link href="./counter.js" />
      </Helmet>
      <h1>{value}</h1>
      <button onClick={Click1}>Increment</button>
      <button onClick={Click3}>Reset</button>
      <button onClick={Click2}>Decrement</button>
    </>
  );
}

export default Counter;
