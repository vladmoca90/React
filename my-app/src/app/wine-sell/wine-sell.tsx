import React, {useState, useEffect, useCallback} from 'react';
import wines from './data';

import 'bootstrap/dist/css/bootstrap.css';
import './wine-sell.css';

const giveWines = wines.map((wine) => {
    return (
        <div className="product" key={wine.id}>
            <div className="product-description__left">
                <h3 className="product-title">{wine.name}</h3>
            </div>
            <div className="product-description__right">
                <img alt="img" className="product-img" src={wine.image} />
            </div>
        </div>
    );
});

export default function wineSell() {
    return (
        <div className='product-container'>
            {giveWines}
        </div>
    );
}