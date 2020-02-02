import React, { useState } from 'react';
export default function Water() {
    let [water, setWater] = useState(0);

    let handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('Water taken', water);
      }
    return (
        <div>
            <h2>Please enter the amount of water you have taken in last 2 hours</h2>
            <input className='water'
                type='number'
                value={water}
                onChange={(e) => setWater(e.target.value)} />
            <h4>{water >= 0 ? `You have taken ${water} glass of water`: 
            `Enter a positive number`}</h4>
            <h4>{water < 3 && water >= 0 ? 
            `Water level is not enough. Please drink more ${3 - water} glasses of water` :
             water > 7 ? 
             `Too much water may dilute your body salt` :
             water < 0 ? `Enter a positive number`:
             `The water level is Perfect `}
             </h4>
             <button onClick={e => handleSubmit(e)}>SEND</button>
        </div>
    );
}