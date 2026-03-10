import { useState } from "react";

function App3() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{backgroundColor: count>0 ? "yellow" : "orange"}}>
      <button onClick={Count}>Count</button>
      <p>The count is: {count}</p>
      <style>
        background-color: yellow;
      </style>
    </div>
  );

  function Count() {
    setCount(count + 1);
  }

}

export default App3;
