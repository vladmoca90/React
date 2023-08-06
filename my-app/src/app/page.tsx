/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useState, useEffect } from 'react';
import wines from './data';

import 'bootstrap/dist/css/bootstrap.css';
import './wine-sell.css';

//A constant that populates the product with wines
const allWines = wines.map((wine, index) => {
    return (
        <div className="product" key={index}>
            <div className="product-description__top">
                <p className="product-title">{wine.name}</p>
            </div>
            <div className="product-description__bottom"> 
                <img alt="wine" className="product-img" key={index} src={"./wineImages/" + wine.img} />
            </div>
        </div>
    );
});

//A constant that populates the dropdown
const winesDropdown = wines.map((wine, index) => {
    return <option key={index}>{wine.name}</option>
});


//A function that filters the dropdown and leaves only the selected wine on the page
function winesFilter() {
    const [filteredNumbers, setFilteredNumbers] = useState(wines)
}

export default function GetWines() {
    return (
        <section className="box">
            <select aria-label="winesDropdown" id="productsList">
                <option>All products</option>
                {winesDropdown}
            </select>
            <div className='products-container'>
                {allWines}
            </div>
        </section>
    );
}


/* 
 list.change(function () {
        let selected = $(this).find(':selected');
        let selectedOption = selected.val();

        product.hide();

        let matchedValue = '.product[data-product-id=' + selectedOption + ']';

        if(selectedOption == 0) {
            product.show();
        }
        if(selectedOption !== 0) {
            $(matchedValue).show();
        }
    });
*/