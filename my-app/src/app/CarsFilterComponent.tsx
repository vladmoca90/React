"use client";
import { useState, useCallback } from 'react';
import { allCars } from './APIs/cars-showroom/route';

export const CarsFilterComponent = () => {
    const [cars] = useState(allCars);

    return (
        <div className="showroom-search">
            <select id="carMake" title="carMake">
                <option value="make">-- Any Make --</option>
                {
                    cars.map((car, index) => {
                        return (
                            <option value={car.make} key={index}>{car.make}</option>
                        );
                    })
                }
            </select>
            <select id="carModel" title="carModel">
                <option value="model">-- Any Model --</option>
                {
                    cars.map((car, index) => {
                        return (
                            <option value={car.model} key={index}>{car.model}</option>
                        );
                    })
                }
            </select>
            <select id="carPrice" title="carPrice">
                <option value="price">-- Any Price --</option>
                <option value="low">&pound;0 - &pound;4999</option>
                <option value="medium">&pound;5000 - &pound;9999</option>
                <option value="high">&pound;10000 - &pound;14999</option>
            </select>
        </div>
    );
}