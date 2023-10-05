import React, { useState, useEffect } from "react";
import "./Counter.css";
function Counter() {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    if (count === 10) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  }, [count]);
  const handleCountUp = () => {
    setCount(count + 1);
  };
  const handleCountDown = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="counter-container">
      <h1>Counter Tugas Mod 3 Kelompok 20</h1>
      <div className="counter">
        <button onClick={handleCountDown}>-</button>
        <p>{count}</p>
        <button onClick={handleCountUp}>+</button>
      </div>
      {showMessage && <p className="message">Stop!! Dah 10</p>}
    </div>
  );
}
export default Counter;
