import React, { useState, useEffect } from "react";
import { Question } from "./questions";
//import { JOEL_QUESTIONS } from "./data";
import "./styles/scss/common.scss";
import axios from "axios";

function App() {
  const [questions, setQuestions] = useState<Question[]>();
  const [clicked, setClicked] = useState<object>({});
  type objectKey = keyof typeof clicked;
  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions: () => Promise<void> = async () => {
    const { data } = await axios.get<Question[]>(
      "http://localhost:8086/api/questions",

      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    // console.log("data", data);
    setQuestions(data);
    //return data;
  };

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
