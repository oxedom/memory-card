import trophyimg from '../styles/high-score.png'

const Scoreboard = (props) => {
    const { highScore, currentScore } = props

    return (<div className="scoreboard">
        <h4> Current Score: {currentScore} </h4>
        <div className="scoreboard-svg">
            <img src={trophyimg} />
            <h4> High Score: {highScore}</h4>

        </div>

    </div>);
}

export default Scoreboard;