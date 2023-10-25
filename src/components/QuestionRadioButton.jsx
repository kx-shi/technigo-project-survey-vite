import React, { useState } from 'react';

export const QuestionOne = (props) => {
    const [placeholder, setPlaceholder] = useState("");

    return(
        <div id="question-one">
            <p>props.question</p>
            <input type="text"
                    onChange={(event) => setPlaceholder(event.target.value)}
                    value={placeholder}>
            </input>
            <p>{placeholder}</p>
        </div>
    )
}