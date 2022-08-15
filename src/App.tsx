import React, { useState } from "react";
import { Question } from "./questions";
import { JOEL_QUESTIONS } from "./data";
import "./styles/scss/common.scss";

function App() {
  const [questions] = useState<Question[]>(JOEL_QUESTIONS);
  const [clicked, setClicked] = useState<object>({});
  type objectKey = keyof typeof clicked;

  const getClass = (index: number) => {
    return `shadow  ${
      clicked[index as objectKey] ? "bottom selected" : "bottom  unselected"
    }`;
  };

  return (
    <div className="app-container">
      {questions?.map(({ label }, index) => (
        <div
          key={index}
          onClick={() => {
            setClicked((prev: any) => ({
              ...prev,
              [index]: !prev[index as objectKey],
            }));
            //console.log("clicked", clicked);
          }}
          className={getClass(index)}
        >
          {index + ") " + label}
        </div>
      ))}
    </div>
  );
}

export default App;
