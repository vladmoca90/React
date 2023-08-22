/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useState } from 'react';
/* import { CarsFilterComponent } from './CarsFilterComponent'; */
import { Cars } from './data';

export default function CarsComponent() {
    //const [cars] = useState(cars);

    <section className="box">
        <div className="showroom-container">
            {
                Cars.map((Car, index) => {
                    return (
                        <div className='car-container' key={index}>
                            <h3 className="car-title">{Car.make} <span>{Car.model}</span></h3>
                            <p className="car-price">&pound; {Car.price}</p>
                            <div>
                                <img alt="car" className="car-img" key={index} src={"./carShowroom/" + Car.img} />
                            </div>
                            <div className="showroom-buttons">
                                <a href="">Enquiry</a>
                                <a href="">Share</a>
                                <a href="">Brochure</a>
                                <a href="">Full details</a>
                            </div>
                        </div>
                    );
                })
            };
        </div>
    </section>
}