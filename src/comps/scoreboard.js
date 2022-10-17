const Scoreboard = (props) => {
    const { highScore, currentScore } = props

    return (<div className="scoreboard">
        <h4> Current Score: {currentScore} </h4>
        <h4> High Score: {highScore}</h4>
    </div>);
}

export default Scoreboard;