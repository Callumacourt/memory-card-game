import { useState } from "react";
import HandleGame from "./game";
import Header from "./header";

export const GameContainer = () => {
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)

    const handleScore = (isReset) => {
        if (isReset) {
            setBestScore((prevBest) => Math.max(prevBest, score));
            setScore(0)
        } else {
            setScore((prevScore) => prevScore + 1)
        }
    }

    return (
        <>
    <Header score={score} bestScore={bestScore}/>
    <HandleGame onScoreChange = {handleScore} />
        </>
    )
}