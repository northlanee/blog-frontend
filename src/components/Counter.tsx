import { useState } from "react";
import styles from "./Counter.module.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <button
      className={styles.button}
      onClick={() => setCounter((prev) => prev + 1)}
    >
      Increment: {counter}
    </button>
  );
};

export default Counter;
