/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useState } from 'react';
import { CarsFilterComponent } from './CarsFilterComponent';
import { Cars } from './data';

export default function CarsComponent() {
    const [allCars] = useState(Cars);

    {allCars.map((car, index) => {
        return (
            <section className="box" key={index}>
                <CarsFilterComponent />
                <div className="showroom-container">
                    <div className='car-container'>
                        <h3 className="car-title">{car.make} <span>{car.model}</span></h3>
                        <p className="car-price">{car.price}</p>
                        <div>
                            <img alt="car" className="car-img" key={index} src={"./carShowroom/" + car.img} />
                        </div>
                    </div>
                </div>
            </section>
            );
        });
    }
}