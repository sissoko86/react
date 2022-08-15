import React, { useState } from "react";

import { Question } from "./questions";
import { Reponse1 } from "./Reponse1";
import { JOEL_QUESTIONS } from "./data";

import "./styles/scss/common.scss";

interface JoelsAppState {
  questions: Question[];
  selectedQuestion: string;
  isBackgroundRed: boolean;
  classNameSected: string;
  selectedQuestionTab: number[];
  clicked: object;
  //[key: number]: any;
}

type ObjectKey = keyof typeof clicked;
//extends React.Component<{}, JoelsAppState>
function App() {
  const [questions] = useState<Question[]>(JOEL_QUESTIONS);
  const [clicked, setClicked] = useState<object>({});
  /* constructor(props: any) {
    super(props);
    this.state = {
      questions: JOEL_QUESTIONS,
      selectedQuestion: "",
      isBackgroundRed: true,
      selectedQuestionTab: arr,
      classNameSected: "shadow  bottom unselected",
      clicked: {},
    };
  } */
  //this.state.questions[index].label === this.state.selectedQuestion &&
  //this.state.isBackgroundRed
  const getClass = (index: number) => {
    return `shadow  ${
      clicked[index as ObjectKey] ? "bottom selected" : "bottom  unselected"
    }`;
  };

  return (
    <div className="app-container">
      {/*Add you code inside this tag*/}
      Let's start !
      {questions?.map(({ label }, index) => (
        <div
          key={index}
          onClick={() => {
            setClicked((prev: any) => ({
              ...prev,
              [index]: !prev[index as ObjectKey],
            }));
            console.log("clicked", clicked);
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
function clicked(arg0: string, clicked: any) {
  throw new Error("Function not implemented.");
}
