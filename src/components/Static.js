import React from 'react';
import airbnbpicture from '../img/airbnb.jpeg';

function Static() {
    return (
        <>
            <div className='static-content'>
                <img className='airbnbpicture' src={airbnbpicture} alt="airbnb" />
                <div className="text-content">
                    <h1>Online Experiences</h1>
                    <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
                </div>
            </div>
        </>

    )
}

export default Static;