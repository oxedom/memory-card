import "./styles/styles.css";
import Footer from "./comps/footer";
import Gameboard from "./comps/gameboard";
import React, { useState } from "react";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="App flex-wrapper">
      <Gameboard></Gameboard>
      <Footer></Footer>
    </div>
  );
}

export default App;
