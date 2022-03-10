/** @jsxImportSource @emotion/react */

import React from "react";
import './QuestionBox.css';

function QuestionBox({ content, handleClickA, handleClickB }) {
  const {
    question,
    category,
    difficulty,
    correct_answer,
    incorrect_answers,
    type,
  } = content;
  return (
    <div id="box" className="questionCard">
      <h1 className=".H1">{decodeURI(question.replace(/&#039;|&quot;*/g, "'"))}</h1>
      <h4 className="H4">Category: {decodeURI(category)}</h4>
      <h4 className="H4">Difficulty: {decodeURI(difficulty)}</h4>
      {type === "multiple" ? (
        <div className="questionOptions">
          <button onClick={handleClickB} className="optionBtn">{decodeURI(correct_answer.replace(/&#039;|&quot;*/g, "'").replace(/&amp;/g, "&"))}</button>
          <button onClick={handleClickA} className="optionBtn">{decodeURI(incorrect_answers[0].replace(/&#039;|&quot;*/g, "'").replace(/&amp;/g, "&"))}</button>
          <button onClick={handleClickA} className="optionBtn">{decodeURI(incorrect_answers[1].replace(/&#039;|&quot;*/g, "'").replace(/&amp;/g, "&"))}</button>
          <button onClick={handleClickA} className="optionBtn">{decodeURI(incorrect_answers[2].replace(/&#039;|&quot;*/g, "'").replace(/&amp;/g, "&"))}</button>
        </div>
      ) : (
        <div className="questionOptions">
            <button onClick={correct_answer ? handleClickB : handleClickA} className="optionBtn">True</button>
            <button onClick={!correct_answer ? handleClickB : handleClickA} className="optionBtn">False</button>
        </div>
      )}
    </div>
  );
}

export default QuestionBox;
