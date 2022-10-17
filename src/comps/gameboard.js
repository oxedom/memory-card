import React, { useState, useEffect } from "react";
import useDidMountEffect from "./hooks/useDidMountEffect";
import Card from "./card";
import img1 from '../images/1 - x300.jpg'
import img2 from '../images/2 - haselblad 500.jpg'
import img3 from '../images/3 - fuji 69.jpg'
import img4 from '../images/4 - pentax 67.jpg'
import img5 from '../images/5 - lecia iiif.jpg'
import img6 from '../images/6 - rb67.jpeg'
import img7 from '../images/7 - olympus  trip.jpeg'
import img8 from '../images/8 - canon ae1.JPG'
import img9 from '../images/9 - pentax k1000.png'
import img10 from '../images/10- nikon f.JPG'
import img11 from '../images/11 - rollieflex.jpg'
import img12 from '../images/12 - lecia m6.jpg'

const Gameboard = () => {
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clicked, setClicked] = useState([]);

    const [cards, setCards] = useState([
        {
            id: 1,
            name: "Minolta X300",
            src: img1
        },
        {
            id: 2,
            name: "hasselblad 500c",
            src: img2
        },
        {
            id: 3,
            name: "Fuji 69",
            src: img3

        },
        {
            id: 4,
            name: "Pentax 67",
            src: img4
        },
        {
            id: 5,
            name: "Lecia iiif",
            src: img5
        },
        {
            id: 6,
            name: "Maymia RB67",
            src: img6
        },
        {
            id: 7,
            name: "Olympus Trip",
            src: img7
        },
        {
            id: 8,
            name: "Canon AE1",
            src: img8
        },
        {
            id: 9,
            name: "Pentax K1000",
            src: img9
        },
        {
            id: 10,
            name: "Nikon F",
            src: img10
        },
        {
            id: 11,
            name: "Rollieflex",
            src: img11
        },
        {
            id: 12,
            name: "Lecia M6",
            src: img12
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
                        src={c.src}
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
