/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useState } from 'react';
import { AllCars } from './data';

export default function CarsComponent () {
    return (
        <div className="showroom-container">
            <div className='car-container'>
                <h3 className="car-title"></h3>
                <p className="car-price"></p>
                <div>
                    <img alt="car" className="product-img" key={index} src={"./carShowroom/" + car.img} />
                </div>
            </div>
        </div>
    );
}