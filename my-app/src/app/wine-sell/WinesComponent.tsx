"use client";
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image'
import { WinesFilterComponent } from './WinesFilterComponent';
import { Wine, WineCategory, allWines } from './data';

export default function WinesComponent() {
    const [originalWines] = useState<Wine[]>(allWines);
    const [wines, setWines] = useState<Wine[]>(allWines);
    const [categories] = useState<WineCategory[]>(Array.from(new Set(wines.map((wine) => wine.category))));
    const whenWineIsSelected = useCallback((category: WineCategory | undefined) => {
        if (category === undefined) {
            setWines(originalWines);
        } else {
            const filteredWines = originalWines.filter(w => w.category === category);
            setWines(filteredWines);
        }
    }, [originalWines]);

    return (
        <section className="box">
            <WinesFilterComponent categories={categories} onWineSelected={whenWineIsSelected} />
            <div className="products-container">
                {
                    wines.map((wine, index) => {
                        return (
                            <div className="product" key={index}>
                                <div className="product-description__top">
                                    <p className="product-title">{wine.name}</p>
                                </div>
                                <div className="product-description__bottom">
                                    <Image alt={wine.name} className="product-img" width={200} height={100} key={index} src={"/wineImages/" + wine.img} />
                                </div>
                            </div>
                        );
                    })}
            </div>
        </section>
    );
}