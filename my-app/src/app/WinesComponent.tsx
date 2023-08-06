/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useEffect, useState } from 'react';
import { WinesFilterComponent } from './WinesFilterComponent';
import { Wine, WineCategory, allWines } from './data';

export default function WinesComponent() {
    const [originalWines] = useState<Wine[]>(allWines); 
    const [wines, setWines] = useState<Wine[]>(allWines);
    const [categories] = useState<WineCategory[]>(Array.from(new Set(wines.map((wine) => wine.category))));
    const whenWineIsSelected = useCallback((category: WineCategory) => {
        const filteredWines = originalWines.filter(w => w.category === category);
        setWines(filteredWines);
    }, [originalWines]);
    
    //How to use useEffect
    useEffect(() => {
        console.log('Hello!');
    }, []);

    useEffect(() => {
        console.log('Wines changed!');
    }, [wines]);

    return (
        <section className="box">
            <WinesFilterComponent categories={categories} onWineSelected={whenWineIsSelected} />
            <div className="products-container">
                {wines.map((wine, index) => {
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
                })}
            </div>
        </section>
    );
}