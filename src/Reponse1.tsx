import React, { Component } from "react";
import { Question } from "./questions";
interface ReponseProps {
  //style: string;
  className: string;
  questionLabel: string;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  //children?: React.ReactNode;
}

export const Reponse1 = ({
  questionLabel,
  //style,
  className,

  onClick,
}: ReponseProps) => {
  return (
    <div
      onClick={onClick}
      className={className}
      //style={{style}}
    >
      <span>{questionLabel}</span>
    </div>
  );
};
