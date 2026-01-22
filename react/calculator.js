import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [operator, setOperator] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setDisplay("");
      setN1("");
      setN2("");
      setOperator("");
    } 
    else if (["+", "-", "*", "/"].includes(value)) {
      setOperator(value);
      setDisplay(display + value);
    } 
    else if (value === "=") {
      const a = Number(n1);
      const b = Number(n2);
      let result = 0;

      if (operator === "+") result = a + b;
      else if (operator === "-") result = a - b;
      else if (operator === "*") result = a * b;
      else if (operator === "/") result = a / b;

      setDisplay(result);
      setN1(result.toString());
      setN2("");
      setOperator("");
    } 
    else {
      if (operator === "") {
        setN1(n1 + value);
      } else {
        setN2(n2 + value);
      }
      setDisplay(display + value);
    }
  };

  return (
    <div className="top">
      <div className="box">
        <input type="text" value={display} className="nav" readOnly />
      </div>

      <div className="c1">
        {["+", "-", "*", "/"].map((op) => (
          <button key={op} className="nav1" onClick={() => handleClick(op)}>
            {op}
          </button>
        ))}
      </div>

      {[["7","8","9","4"],["5","6","1","2"],["3","0",".","C"]].map((row, i) => (
        <div className="c1" key={i}>
          {row.map((btn) => (
            <button
              key={btn}
              className="nav2"
              style={btn === "C" ? { backgroundColor: "#f45c47", color: "#fff" } : {}}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      ))}

      <div className="c1">
        <button
          className="nav2"
          style={{ backgroundColor: "#0cd7a0", color: "#fff", width: "125px" }}
          onClick={() => handleClick("=")}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
