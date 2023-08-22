/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useEffect, useState } from 'react';
import { CarsFilterComponent } from './CarsFilterComponent';
import { allCars, Car, CarsColor } from './data';

export default function CarsComponent() {
    const [cars] = useState(allCars);

    return (
        <section className="box">
            <div className="showroom-container">
                {
                    cars.map((car, index) => {
                        return (
                            <div className='car-container' key={index}>
                                <h3 className="car-title">{car.make} <span>{car.model}</span></h3>
                                <hr />
                                <p className="car-price">&pound; {car.price}</p>
                                <div>
                                    <img alt="car" className="car-img" key={index} src={"./carsShowroom/" + car.img} />
                                </div>
                                <div className="showroom-buttons">
                                    <a href="#">Enquiry</a>
                                    <a href="#">Share</a>
                                    <a href="#">Brochure</a>
                                    <a href="#">Full details</a>
                                </div>
                            </div>
                        );
                    })
                };
            </div>
        </section>
    );
}