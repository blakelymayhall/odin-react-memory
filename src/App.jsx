import Header from "./components/Header";
import ScoreTracker from "./components/ScoreTracker";
import CardGrid from "./components/CardGrid";

import { useState } from "react";

function App() {
    const [score, setScore] = useState(0);

    const scoreManager = () => {
        const incrementScore = () => {
            setScore(score + 1);
        };

        const resetScore = () => {
            setScore(0);
        };

        return {
            incrementScore,
            resetScore,
        };
    };

    return (
        <>
            <Header></Header>
            <ScoreTracker score={score}></ScoreTracker>
            <CardGrid scoreManager={scoreManager()}></CardGrid>
        </>
    );
}

export default App;
