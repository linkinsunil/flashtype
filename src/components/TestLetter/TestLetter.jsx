import React from 'react';
import './TestLetter.css';

const TestLetter = ({individualLetterInfo}) => {

    const {status} = individualLetterInfo;

    //This is a dictionary, [status] takes only one key at a time and returns its value.
    let statusClass ={
        correct: "test-letter-correct",
        incorrect: "test-letter-incorrect",
        notAttempted: "test-letter-not-attempted"
    }[status];

    // if(status == "correct") {
    //     statusClass = "test-letter-correct"
    // } else if(status == "incorrect"){
    //     statusClass = "test-letter-incorrect"
    // } else {
    //     statusClass = "test-letter-not-attempted"
    // }



    return (
        <span className={`test-letter ${statusClass}`}>{individualLetterInfo.testLetter}</span>
    )
}

export default TestLetter
