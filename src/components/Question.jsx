import React from "react";
import QuestionTextInput from "./QuestionTextInput";
import QuestionRadioButton from "./QuestionRadioButton";
import QuestionSelectDropdown from "./QuestionSelectDropdown";

export const Question = ({question, updateFunction}) => {
    switch(question.type) {
        case "textinput":
            return <QuestionTextInput questionData={question} updateFunction={updateFunction} />
        case "radio":
            return <QuestionRadioButton questionData={question} updateFunction={updateFunction} />
        case "dropdown":
            return <QuestionSelectDropdown questionData={question}updateFunction={updateFunction}  />
        default:
            console.log(question.type)
    }
}