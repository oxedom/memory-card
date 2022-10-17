import React, { useState, useEffect } from "react";
import useDidMountEffect from "./hooks/useDidMountEffect";
import Card from "./card";

const Gameboard = () => {
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clicked, setClicked] = useState([]);

    const [cards, setCards] = useState([
        {
            id: 1,
            name: "Minolta X300",
        },
        {
            id: 2,
            name: "hasselblad 500c",
        },
        {
            id: 3,
            name: "Fuji 69",
        },
        {
            id: 4,
            name: "Pentax 67",
        },
        {
            id: 5,
            name: "Lecia iiif",
        },
        {
            id: 6,
            name: "Maymia RB67",
        },
        {
            id: 7,
            name: "Olympus Trip",
        },
        {
            id: 8,
            name: "Canon AE1",
        },
        {
            id: 9,
            name: "Pentax K1000",
        },
        {
            id: 10,
            name: "Nikon F",
        },
        {
            id: 11,
            name: "Rollieflex",
        },
        {
            id: 12,
            name: "Lecia M6",
        },
    ]);

    const addClicked = (id) => {
        setClicked((previousState) => {
            return [...previousState, id];
        });
    };

    //Shuffles Array to make memory game harder
    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }
    //Checks the Clicked Array for Duplicates
    function hasDuplicates(array) {
        return new Set(array).size !== array.length;
    }

    const handleGameOver = () => {
        //Set a new highscore of currentScore is bigger than Highscore
        console.log(currentScore);
        console.log('000000000000');
        console.log(highScore);
        if (currentScore > highScore) {
            setHighScore(currentScore);
        }
        //Reset Current Score
        setCurrentScore(0);
        setClicked([]);
    };




    useDidMountEffect(() => {
        setCards(shuffle(cards));

        if (hasDuplicates(clicked)) { handleGameOver(); }
        else { setCurrentScore((prevState) => prevState + 1); }
    }, [clicked]);

    return (
        <div className="main">
            <h4> currentScore: {currentScore} </h4>

            <h1> highScore: {highScore} </h1>
            <main className="gameboard-grid">
                {cards.map((c) => (
                    <Card
                        handleClick={(e) => {
                            addClicked(c.id);
                        }}
                        name={c.name}
                        a-id={c.id}
                        key={c.id}
                    >
                        {" "}
                    </Card>
                ))}
            </main>
        </div>
    );
};

export default Gameboard;
