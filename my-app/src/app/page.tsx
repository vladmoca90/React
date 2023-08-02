import React from 'react';
import wines from './data';
import Image from 'next/image'

import 'bootstrap/dist/css/bootstrap.css';
import './wine-sell.css';

//A constant that populates the product with wines
const getWines = wines.map((wine) => {
    return (
        <div className="product" key={wine.id}>
            <div className="product-description__left">
                <h3 className="product-title">{wine.name}</h3>
            </div>
            <div className="product-description__right">
                <Image key={wine.id} src={wine.img} alt={wine.img} className="product-img" />
            </div>
        </div>
    );
});

export default function wineSell() {
    return (
        <section className="box">
            <div className='product-container'>
                {getWines}
            </div>
        </section>
    );
}