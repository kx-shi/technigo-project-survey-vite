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


export const App = () => {
  const images = [img1, img2, img3, img4, img5];
  const totalQuestions = data.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [currentBackground, setCurrentBackground] = useState(0);
  const [currentWeighting, setCurrentWeighting] = useState([0.0,0.0,0.0,0.0]);
  const [results, setResults] = useState([0.0,0.0,0.0,0.0]);
  const [houseIndex, setHouseIndex] = useState(-1);

  const handleNextQuestion = () => {
    switch(true) {
      case (currentQuestion < totalQuestions && currentQuestion > 0):
        // handle question number
        setCurrentQuestion(currentQuestion + 1);
        // handle background image
        setCurrentBackground((currentBackground + 1) % images.length);
        // update results
        updateResults(currentWeighting);
        break;
      case (currentQuestion >= totalQuestions):
        handleResults(currentQuestion);
        break;
      default:
        console.log("End of quiz")
        console.log(`currentQuestion: ${currentQuestion}`)
        console.log(currentQuestion === 0)
    }
  };

  const handleResults = () => {
    // TODO: Display results
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
    console.log(houseIndex)
  }

  const updateResults = (intermediateResults) => {
    let updatedResults = results.map((val, idx) => {
      return val + intermediateResults[idx];
    })

    setResults(updatedResults);
  };

  const handleChange = (e) => {
    let weightsArray = e.target.value.split(",");
    let weightsAsFloatArray = weightsArray.map((weight) => parseFloat(weight));

    setCurrentWeighting(weightsAsFloatArray);
  }

  return (
      <div className="container" style={{ backgroundImage: `url(${images[currentBackground]})` }}>
        <div className="question-card-container">
          <QuestionNumber questionNumber={currentQuestion} text={`Question ${currentQuestion}/${totalQuestions}`} />

          {currentQuestion === 1 && (
            <Question question={data.questions[0]} updateFunction={handleChange} />
          )}
          
          {currentQuestion === 2 && (
            <Question question={data.questions[1]} updateFunction={handleChange} />
          )}

          {currentQuestion === 3 && (
            <Question question={data.questions[2]} updateFunction={handleChange} />
          )} 

          {currentQuestion === 4 && (
            <Question question={data.questions[3]} updateFunction={handleChange} />
          )} 

          {currentQuestion === 5 && (
            <Question question={data.questions[4]} updateFunction={handleChange} />
          )}
          
          {currentQuestion === 6 && (
            <Question question={data.questions[5]} updateFunction={handleChange} />
          )}

          {
          currentQuestion === 0 && (
            <div className="results-container">
              <h3 style={{ textAlign: "center" }}>Congratulations, you have been sorted into {data.houses[houseIndex].housename}</h3>
              <p>{data.houses[houseIndex].description}</p>
            </div>
          )} 
          
        
        <div className="button-container">
          <ButtonComponent 
            buttonText={currentQuestion<totalQuestions && currentQuestion > 0 ? "Next question" : "Submit"}
            onClick={handleNextQuestion} />
        </div>
      </div>
    </div>
  );
};
