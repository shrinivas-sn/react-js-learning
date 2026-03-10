import { useState } from "react";
function App2() {
  return (
    <div>
      <Counter />
      <LightOn />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const date = new Date("March 10 2026");
  return (
    <div className="container">
      <div className="step">
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <p>Step: {step}</p>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div className="count">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
              ? `${count} days ago from today is `
              : ` ${count} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </div>
  );
}

function LightOn(){
    const [isLightOn, setIsLightOn]  = useState(true);
    return(
        <div>
            <button onClick={function(){setIsLightOn(!isLightOn)}} style = {{background: isLightOn ? 'blue' : 'yellow'}}>
            </button>
        </div>
    )
}

export default App2;
