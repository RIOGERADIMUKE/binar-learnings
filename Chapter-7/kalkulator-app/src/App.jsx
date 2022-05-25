import logo from "./logo.svg";
import "./App.css";


import {useRef, useState, useEffect} from "react";


function App() {
  const [renderCount, setRenderCount] = useState(0);
  const [count, setCount] = useState(0);



  const valueOne = useRef(0);
  const valueTwo = useRef(0);

  const sumValue = () => {
    if (valueOne.current.value && valueTwo.current.value) {
    const valueOneInt = parseInt(valueOne.current.value);
    const valueTwoInt = parseInt (valueTwo.current.value);
    const sum = valueOneInt + valueTwoInt;

    setCount(sum);
    }
  }

  const MultiplyValue = () => {
    if (valueOne.current.value && valueTwo.current.value) {
      const valueOneInt = parseInt(valueOne.current.value);
      const valueTwoInt = parseInt(valueTwo.current.value);
      const multi = valueOneInt * valueTwoInt;

      setCount(multi);
    }
  };

  const MinValue = () => {
    if (valueOne.current.value && valueTwo.current.value) {
      const valueOneInt = parseInt(valueOne.current.value);
      const valueTwoInt = parseInt(valueTwo.current.value);
      const min = valueOneInt - valueTwoInt;

      setCount(min);
    }
  };

  useEffect(() => setRenderCount(renderCount + 1), [count]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Simple Calculator</p>
        <div>
        <form>
    <input className="val"
      placeholder="Value One" 
      type="number" 
      ref={valueOne} />
    <br></br>
  <input className="val"
      placeholder="Value Two" 
      type="number" 
      ref={valueTwo} />
</form> 
        </div>
        <div>
        <div className="button1">
        <button className="b1" onClick={MultiplyValue}>Multiply</button>
        <button className="b1" onClick={sumValue}>Sum</button>
        <button className="b1" onClick={MinValue}>Minus</button>
        </div>
        <h1>Result : {count}</h1>
        <h1>Render count: {renderCount}</h1>
        </div>
      </header>
    </div>
  );
}

export default App;