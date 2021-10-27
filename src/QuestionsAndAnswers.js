import React from "react";
import data from "./data";
import Accordion from "./Accordion";

const QuestionsAndAnswers = () => {
  return (
    <article>
      <h1>Questions and Answers About Login</h1>
      <div className="column-right">
        {data.map((accordion) => {
          return (
            <Accordion
              className="accordion"
              key={accordion.id}
              {...accordion}
            />
          );
        })}
      </div>
    </article>
  );
};

export default QuestionsAndAnswers;
