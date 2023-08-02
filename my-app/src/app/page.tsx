import React from 'react';
import wines from './data';

import 'bootstrap/dist/css/bootstrap.css';
import './wine-sell.css';

const getWines = wines.map((wine) => {
    return (
        <div className="product" key={wine.id}>
            <div className="product-description__left">
                <h3 className="product-title">{wine.name}</h3>
            </div>
            <div className="product-description__right">
                <img key={wine.id} src={wine.img} alt="img" className="product-img" />;
            </div>
        </div>
    );
});

export default function wineSell() {
    return (
        <div className='product-container'>
            {getWines}
        </div>
    );
}