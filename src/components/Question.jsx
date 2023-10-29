import React from "react";
import QuestionTextInput from "./QuestionTextInput";
import QuestionRadioButton from "./QuestionRadioButton";
import QuestionSelectDropdown from "./QuestionSelectDropdown";
import '../styles/Question.css';
 
/* Component that does initial filtering of question type to render the corresponding question-type component */
export const Question = ({question, updateFunction}) => {
    switch(question.type) {
        case "textinput":
            return (
                <div className="question-container">
                    <QuestionTextInput questionData={question} updateFunction={updateFunction} />
                </div>
                )
        case "radio":
            return (
                <div className="question-container">
                    <QuestionRadioButton questionData={question} updateFunction={updateFunction} />
                </div>
                )
        case "dropdown":
            return (
                <div className="question-container">
                    <QuestionSelectDropdown questionData={question} updateFunction={updateFunction} />
                </div>
            )
        default:
            console.log(question.type)
    }
}