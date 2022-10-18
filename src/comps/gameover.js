import { useEffect } from 'react';
import gameover from '../images/gameover.jpg'


const Gameover = (props) => {
  useEffect(() => {
      const timeoutID = setTimeout(() => {
        props.onDone()
      }, 3500);
      return () => {
        clearTimeout(timeoutID);
      }
  }, []);

  return <header className="gameover">
    <h1> GAME OVER</h1>
    <h2> Your score was {props.score}</h2>
    <img src={gameover} />

  </header>;
};

export default Gameover;
