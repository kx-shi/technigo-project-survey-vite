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
import data from "/data.json";


export const App = () => {
  const images = [img1, img2, img3, img4, img5];
  const totalQuestion = 5;
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [currentBackground, setCurrentBackground] = useState(0);



let questions = data.questions;
console.log(questions);

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
       
 





       {currentQuestion === 1 && (
        <QuestionTextInput questionText={"this is the first question"}/>
        )}

        {currentQuestion === 2 && (
        <QuestionRadioButton questionText={"this is the second question?"} optionText1={"option 1"} optionText2={"option 2"}/>
        )}

        {currentQuestion === 3 && (
        <QuestionSelectDropdown questionText={"this is the THIRD question?"}/>
      )} 

        {currentQuestion === 4 && (
        <QuestionSelectDropdown questionText={"this is the FOURTH question?"}/>
      )} 
        
        
      
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
