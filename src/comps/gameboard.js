import uniqid from 'uniqid'
import React, { useState, useEffect } from 'react';
import Card from './card'
import { click } from '@testing-library/user-event/dist/click';

const Gameboard = () => {

    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clicked, setClicked] = useState([])
    const [init, setInit] = useState(false)

    const [cards, setCards] = useState([
        {
            id: 1,
            name: 'Minolta X300'
        },
        {
            id: 2,
            name: 'hasselblad 500c'
        },
        {
            id: 3,
            name: 'Fuji 69'
        },
        {
            id: 4,
            name: 'Pentax 67'
        },
        {
            id: 5,
            name: 'Lecia iiif'
        },
        {
            id: 6,
            name: 'Maymia RB67'
        }
        ,
        {
            id: 7,
            name: 'Olympus Trip'
        }
        , {
            id: 8,
            name: 'Canon AE1'
        },
        {
            id: 9,
            name: 'Pentax K1000'
        },
        {
            id: 10,
            name: 'Nikon F'
        },
        {
            id: 11,
            name: 'Rollieflex'
        },
        {
            id: 12,
            name: 'Lecia M6'
        },
        // {
        //     id: uniqid(),
        //     name: 'Holga 120GN'
        // }
    ])


    const addClicked = (id) => {
        setClicked((previousState) => {
            return [...previousState, id]
        })
    }

    const handleGameOver = () => {
        alert('gameover')

    }

    useEffect(() => {
        if (currentScore > highScore) { setHighScore(currentScore) }
    }, [currentScore]);



    useEffect(() => {
        setInit(true)
        //Shuffles Array to make memory game harder
        function shuffle(array) { return array.sort(() => Math.random() - 0.5); }
        //Checks the Clicked Array for Duplicates
        function hasDuplicates(array) { return (new Set(array)).size !== array.length; }

        setCards(shuffle(cards))

        if (init) {
            if (hasDuplicates(clicked)) { handleGameOver() }
            else { setCurrentScore((prevState) => { return prevState + 1 }) }
        }


    }, [clicked]);







    return (
        <div className='main'>
            <h4> currentScore: {currentScore} </h4>

            <h1> highScore: {currentScore} </h1>
            <main className='gameboard-grid'>


                {cards.map(c => <Card handleClick={(e) => { addClicked(c.id) }} name={c.name} a-id={c.id} key={c.id}> </Card>)}

            </main>
        </div>
    );
}

export default Gameboard;