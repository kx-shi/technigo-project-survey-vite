import React, { useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import { Question } from "./components/Question";
import QuestionNumber from "./components/QuestionNumber";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import data from "/data.json";
import './index.css';
import ResultsComponent from "./components/ResultsComponent";


export const App = () => {
  const images = [img1, img2, img3, img4, img5];
  const totalQuestions = data.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [currentBackground, setCurrentBackground] = useState(0);
  const [currentWeighting, setCurrentWeighting] = useState([0.0,0.0,0.0,0.0]);
  const [results, setResults] = useState([0.0,0.0,0.0,0.0]);
  const [houseIndex, setHouseIndex] = useState(-1);
  const [buttonText, setButtonText] = useState("Next");
  const [userName, setUserName] = useState("");

  /* Handles clicks on button
   * Updates question number, background image, and shows results when last question answered
   */
  const handleNextQuestion = () => {
    switch(true) {
      case (currentQuestion < totalQuestions):
        setCurrentQuestion(currentQuestion + 1); // handle question number
        setCurrentBackground((currentBackground + 1) % images.length);  // handle background image
        updateResults(currentWeighting); // update results
        if(currentQuestion == totalQuestions-1) {
          setButtonText("Submit");
        }else {
          setButtonText("Next");
        }
        break;
      case (currentQuestion >= totalQuestions):
        handleResults();
        setButtonText("Sort me again!");
        break;
      default:
        setButtonText("Next");
        break;
    }
  };

  /* Handles the final results array
   * 1. Normalize weights and reduce to two decimals
   * 2. Find index of highest weight
   * 3. Set houseIndex to index of highest weight
   */
  const handleResults = () => {
    let updatedResults = results.map((val, idx) => {
      return ((val/(data.questions.length)).toFixed(2));
    })
    setResults(updatedResults);

    let maxIndex = 0; 
    for (let i = 1; i < updatedResults.length; i++) { 
        if (updatedResults[i] > updatedResults[maxIndex]) { 
            maxIndex = i; 
        } 
    } 
    setHouseIndex(maxIndex);
    setCurrentQuestion(0);
    setCurrentWeighting([0.0,0.0,0.0,0.0]);
    setResults([0.0,0.0,0.0,0.0]);
  }

  /* Updates results between questions */
  const updateResults = (intermediateResults) => {
    let updatedResults = results.map((val, idx) => {
      return val + intermediateResults[idx];
    })

    setResults(updatedResults);
  };

  const handleChange = (e) => {
    let weightsArray = e.target.value.split(","); // parameter e is event provided by the questions components
    let weightsAsFloatArray = weightsArray.map((weight) => parseFloat(weight));

    setCurrentWeighting(weightsAsFloatArray);
  }

  const storeUserName = (e) => {
    setUserName(e.target.value);
  }

  return (
      <div className="container" style={{ backgroundImage: `url(${images[currentBackground]})` }}>
        <div className="question-card-container">
          <QuestionNumber questionNumber={currentQuestion} text={`Question ${currentQuestion}/${totalQuestions}`} />

          {currentQuestion === 1 && (
            <Question question={data.questions[0]} updateFunction={handleChange}/>
          )}
          
          {currentQuestion === 2 && (
            <Question question={data.questions[1]} updateFunction={handleChange} />
          )}

          {currentQuestion === 3 && (
            <Question question={data.questions[2]} updateFunction={handleChange}/>
          )} 

          {currentQuestion === 4 && (
            <Question question={data.questions[3]} updateFunction={handleChange}/>
          )} 

          {currentQuestion === 5 && (
            <Question question={data.questions[4]} updateFunction={handleChange}/>
          )}
          
          {currentQuestion === 6 && (
            <Question question={data.questions[5]} updateFunction={storeUserName} />
          )}

          {
          currentQuestion === 0 && ( // Results card
            <ResultsComponent userName={userName} houseIndex={houseIndex} />
          )} 
          
        
        <div className="button-container">
          <ButtonComponent 
            buttonText={buttonText}
            onClick={handleNextQuestion} />
        </div>
      </div>
    </div>
  );
};
