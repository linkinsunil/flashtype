import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import './TypingChallengeContainer.css';

const TypingChallengeContainer = ({words, characters, wpm}) => {
    return (
        <div className="typing-challenge-container">
            {/* Details-section */}

            <div className="details-container">
                {/* Words-typed */}
                <ChallengeDetailsCard cardName="Words" cardValue={words} />

                {/* Characters typed */}
                <ChallengeDetailsCard cardName="Characters" cardValue={characters} />

                {/* Speed */}
                <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
            </div>

            {/* The REAL Challenge */}
            <div className="typewriter-container">
                <TypingChallenge selectedParagraph="Hello World!"/>
            </div>
        </div>
    )
}

export default TypingChallengeContainer;
