import { useState } from "react";
import HandleGame from "./game";
import Header from "./header";

export const GameContainer = () => {
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)

    const handleScore = (isReset) => {
        if (isReset) {
            setScore(0);
        } else {
            setScore((prevScore) => {
                const newScore = prevScore + 1;
                setBestScore((prevBest) => Math.max(prevBest, newScore));
                return newScore;
            });
        }
    };
    

    return (
        <>
    <Header score={score} bestScore={bestScore}/>
    <HandleGame onScoreChange = {handleScore}/>
        </>
    )
}