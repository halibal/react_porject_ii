import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function CardFunction({ items }) {
    let badgeText;
    if (items.openSpots === 0) {
        badgeText = "sold out".toUpperCase();
    } else if (items.location === "Online") {
        badgeText = "online".toUpperCase();
    };


    return (
        <div className="card-body">
            <div className='card-img-container'>
                <p className='product-status'>{badgeText}</p>
            </div>
            <img className="card-img" src={items.coverImg} alt="card" />
            <div className='content-container'>
                <div className='points-container'>
                    <FontAwesomeIcon icon={faStar} className='start-icon' />
                    <p className='event-points'>{items.rating} <span>({items.reviewCount}) - {items.location}</span></p>
                </div>
                <p className='card-title'>{items.title}</p>
                <p className='event-price'>From ${items.price} <span>/ person</span></p>
            </div>
        </div>
    )
}

export default CardFunction;