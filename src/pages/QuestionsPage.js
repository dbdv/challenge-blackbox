import React, { useState } from "react";
import { useEffect } from "react";
import QuestionBox from "../components/QuestionBox";
import { getData } from "../services/getQuestions";
import Gameover from "./GameoverPage";
import "../main.css";

function QuestionsPage() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getData().then((data) => {
      setQuestions(
        data.map((q) => (
          <QuestionBox
            content={q}
            handleClickA={handleClickA}
            handleClickB={handleClickB}
          />
        ))
      );
    });
  }, []);

  const handleClickA = (e) => {
    if (index < 9) {
      console.log("mal ahre");
      document.getElementById("box").classList.add("styledQuestionFail");
      setTimeout(() => {
        document.getElementById("box").classList.remove("styledQuestionFail");
        setIndex((i) => i + 1);
      }, 2000);
    } else {
      document.getElementById("box").classList.add("styledQuestionFail");
      setTimeout(() => {
        document.getElementById("box").classList.remove("styledQuestionFail");
      }, 2000);
      console.log("mal ahre", "gameover");
    }
  };

  const handleClickB = (e) => {
    if (index < 9) {
      console.log("bien ahre");
      document.getElementById("box").classList.add("styledQuestionSucces");
      setTimeout(() => {
        document.getElementById("box").classList.remove("styledQuestionSucces");
        setIndex((i) => i + 1);
      }, 2000);
    } else {
      document.getElementById("box").classList.add("styledQuestionSucces");
      setTimeout(() => {
        document.getElementById("box").classList.remove("styledQuestionSucces");
      }, 2000);
      console.log("bien ahre", "gameover");
    }
  };

  return (
    <div className="centeredDiv">
      {index === 9 ? <Gameover/> : questions.length !== 0 && questions[index]}
    </div>
  );
}

export default QuestionsPage;
