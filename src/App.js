import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" className="display" value={result || input} readOnly />
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+", "C"].map((char) => (
          <button
            key={char}
            className={`button ${isNaN(char) && char !== "." ? "operator" : ""} ${char === "=" ? "equal" : ""} ${char === "C" ? "clear" : ""}`}
            onClick={() => handleClick(char)}
          >
            {char}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
