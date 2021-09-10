import React from 'react';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import './TestContainer.css';

const TestContainer = ({ 
    selectedParagraph,
    timeRemaining,
    timerStarted,
    words,
    characters,
    wpm 
}) => {
    return (
        <div className="test-container">
            {timeRemaining > 0
                ? <div data-aos="fade-up" className="typing-challenge-container">
                    <TypingChallengeContainer
                        words={words}
                        characters={characters}
                        wpm={wpm}
                        selectedParagraph={selectedParagraph}
                        timeRemaining={timeRemaining}
                        timerStarted={timerStarted}
                    />
                </div>
                : <div className="try-again-container">
                    <TryAgain
                        words={words}
                        characters={characters}
                        wpm={wpm}
                    />
                </div>}
        </div>
    )
}

export default TestContainer;
