/* eslint-disable @next/next/no-img-element */
import React from 'react';
import wines from '../data';

import 'bootstrap/dist/css/bootstrap.css';
import './wine-sell.css';

//A constant that populates the product with wines
const getWines = wines.map((wine, index) => {
    return (
        <div className="product" key={index}>
            <div className="product-description__left">
                <h3 className="product-title">{wine.name}</h3>
            </div>
            <div className="product-description__right">
                <img alt="wine" className="product-img" key={index} src={wine.img} />
            </div>
        </div>
    );
});

//A constant that populates the dropdown
const winesDropdown = wines.map((wine, index) => {
    return <option key={index}>{wine.name}</option>
});

export default function wineSell() {
    return (
        <section className="box">
            <select aria-label="winesDropdown" id="productsList">
                <option>All products</option>
                {winesDropdown}
            </select>
            <div className='product-container'>
                {getWines}
            </div>
        </section>
    );
}