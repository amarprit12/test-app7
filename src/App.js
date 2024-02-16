import "./App.css";
import { React, useState } from "react";

function App() {
  // const [count, setCount] = useState(10);
  const [count, setCount] = useState(0); // useState hook, as we can't update variable (count) directly, 0 is initial value

  function updateState() {
    // setCount(count + 5);
    setCount(count + 1);
  }
  return (
    <>
      <h1>Learning usestate {count} times</h1>
      <button onClick={updateState}>Click Me</button>
    </>
  );
}

export default App;
