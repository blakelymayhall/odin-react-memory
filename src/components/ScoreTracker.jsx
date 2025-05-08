import { useState, useEffect } from "react";

import "./styles/scoretracker.css";

function ScoreTracker({ score }) {
    const [bestScore, setBestScore] = useState(0);
    const [statusMessage, setStatusMessage] = useState(null);

    useEffect(() => {
        if (score > bestScore) {
            setBestScore(score);
        }

        if (bestScore == 0 && score == 0) {
            setStatusMessage("Click to Start!");
        } else if (score != 0) {
            setStatusMessage("Keep Going!");
        } else {
            setStatusMessage("You Lose!");
        }
    }, [score]);

    return (
        <>
            <div className="scoreTrackerContainer">
                <div className="scoreTracker">
                    <h3>Score: {score} </h3>
                    <h3>Best Score: {bestScore}</h3>
                </div>
                <h2>{statusMessage}</h2>
            </div>
        </>
    );
}

export default ScoreTracker;
