import { useState } from "react";
import './app.css';
function App() {
  const [counter , setCounter] = useState(10)

  function addValue(){
    // setCounter(counter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }
  function RemoveValue(){
    if(counter > 0){
    setCounter(counter - 1)
  }
}

  
  // const addValue = () => {
  //   setCounter(counter + 1)
  // }
  // const RemoveValue = () => {
  //   console.log("Removed value");
  // }

  return (
    <>
    <h1> Counter value : {counter}</h1>
    <button onClick={addValue}> Add value</button>
    <br/>
    <button onClick={RemoveValue}>Remove Value</button>
    </>
  );
}

export default App;
