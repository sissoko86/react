import React, { Component } from "react";
import { Question } from "./questions";
interface ReponseProps {
  className: string;
  questionLabel: string;
  updateSelectedQuestion: (params: string) => void;
  //children?: React.ReactNode;
}

export const Reponse3 = ({
  questionLabel,
  className,
  updateSelectedQuestion,
}: ReponseProps) => {
  return (
    <div
      onClick={() => updateSelectedQuestion(questionLabel)}
      className={className}
    >
      <span>{questionLabel}</span>
    </div>
  );
};
