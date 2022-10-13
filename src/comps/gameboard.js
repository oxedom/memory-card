import uniqid from 'uniqid'
import React, { useState } from 'react';
import Card from './card'

const Gameboard = () => {

    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const cards =
        [
            {
                id: uniqid(),
                name: 'Minolta X300'
            },
            {
                id: uniqid(),
                name: 'hasselblad 500c'
            },
            {
                id: uniqid(),
                name: 'Fuji 69'
            },
            {
                id: uniqid(),
                name: 'Pentax 67'
            },
            {
                id: uniqid(),
                name: 'Lecia iiif'
            },
            {
                id: uniqid(),
                name: 'Maymia RB67'
            }
            ,
            {
                id: uniqid(),
                name: 'Olympus Trip'
            }
            , {
                id: uniqid(),
                name: 'Canon AE1'
            },
            {
                id: uniqid(),
                name: 'Pentax K1000'
            },
            {
                id: uniqid(),
                name: 'Nikon F'
            },
            {
                id: uniqid(),
                name: 'Rollieflex'
            },
            {
                id: uniqid(),
                name: 'Lecia M6'
            },
            // {
            //     id: uniqid(),
            //     name: 'Holga 120GN'
            // }
        ]




    return (
        <div className='main'>
            <main className='gameboard-grid'>
                {cards.map(c => <Card name={c.name} a-id={c.id} key={c.id}> </Card>)}

            </main>
        </div>
    );
}

export default Gameboard;