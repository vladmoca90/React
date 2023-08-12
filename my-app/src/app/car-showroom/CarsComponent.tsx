/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useEffect, useState } from 'react';
import { AllCars } from './data';

export default function CarsComponent() {
    {AllCars.map((car, index) => {
        return (
            <div className="showroom-container" key={index}>
                <div className='car-container'>
                    <h3 className="car-title">{car.make} <span>{car.model}</span></h3>
                    <p className="car-price">{car.price}</p>
                    <div>
                        <img alt="car" className="product-img" key={index} src={"./carShowroom/" + car.img} />
                    </div>
                </div>
            </div>
            );
        });
    }
}