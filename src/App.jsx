import React, { useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import QuestionTextInput from "./components/QuestionTextInput";
import QuestionRadioButton from "./components/QuestionRadioButton";
import QuestionSelectDropdown from "./components/QuestionSelectDropdown";
import QuestionNumber from "./components/QuestionNumber";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";


export const App = () => {
  const images = [img1, img2, img3, img4, img5];
  const totalQuestion = 5;
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [currentBackground, setCurrentBackground] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestion) {
      // handle question number
      setCurrentQuestion(currentQuestion + 1);
      // handle background image
      setCurrentBackground((currentBackground + 1));
    }
  };

  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${images[currentBackground]})` }}
    >
      <div className="question-card-container">
        <QuestionNumber
          questionNumber={`Question ${currentQuestion}/${totalQuestion}`}
        />
        <QuestionTextInput questionText={"Lorem ....."} />
        <div className="button-container">
          <ButtonComponent
            buttonText={"Next question"}
            onClick={handleNextQuestion}
          />
        </div>
      </div>
    </div>
  );
};
