import React, { useState } from "react";

function App() {
  // let counter = 5;
  const [counter, setCounter] = useState(1);
  const addValue = () => {
    // counter = counter + 1;
    console.log("value Added", counter);
    setCounter(counter + 1);
  };
  const deleteValue = () => {
    // counter = counter - 1;
    console.log("Value Deleted", counter);
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>Cunte Value: {counter}</h1>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={deleteValue}>Decrease Value</button>
    </div>
  );
}

export default App;
