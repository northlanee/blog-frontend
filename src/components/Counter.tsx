import { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <button onClick={() => setCounter((prev) => prev + 1)}>
      Increment: {counter}
    </button>
  );
};

export default Counter;
