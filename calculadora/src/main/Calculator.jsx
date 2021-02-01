import React from "react";
import "./Calculator.css";
import Button from '../components/Button'
import Display from '../components/Display'

    const clearMemory = () => {
        console.log("Clear");
    };
    
    const setOperation = (operation) => {
        console.log(operation)
    };
    
    const addDigit = (n) => {
        console.log(n)
    };

const Calculator = () => {

  return <div className="calculator" >
      <Display value={100} />
      <Button label="AC" onClick={() => clearMemory()} triple />
      <Button label="/" operation />
      <Button label="7" />
      <Button label="8" />
      <Button label="9" />
      <Button label="*" operation />
      <Button label="4" />
      <Button label="5" />
      <Button label="6" />
      <Button label="-" operation />
      <Button label="1" />
      <Button label="2" />
      <Button label="3" />
      <Button label="+" operation />
      <Button label="0" double />
      <Button label="." />
      <Button label="=" operation />
  </div>
};

export default Calculator;
