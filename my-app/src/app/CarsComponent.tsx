"use client";
import { useState } from 'react';
import Image from 'next/image'
import { allCars } from './data';

export default function CarsComponent() {
    const [cars] = useState(allCars);

    return (
        <section className="box">
            <div className="showroom-search">
                <select id="carMake" title="carMake">
                    {
                        cars.map((car, index) => {
                            return (
                                <option value={car.make} key={index}>{car.make}</option>
                            );
                        })
                    }
                </select>
                <select id="carModel" title="carModel">
                    {
                        cars.map((car, index) => {
                            return (
                                <option value={car.model} key={index}>{car.model}</option>
                            );
                        })
                    }
                </select>
                <select id="carPrice" title="carPrice">
                    <option value="low">0 - &pound;4999</option>
                    <option value="medium">&pound;5000 - &pound;9999</option>
                    <option value="high">&pound;10000 - &pound;14999</option>
                </select>
            </div>
            <div className="showroom-container">
                {
                    cars.map((car, index) => {
                        return (
                            <div className="car-container" key={index}>
                                <div className="car-header">
                                    <h3 className="car-title">{car.make} <span>{car.model}</span></h3>
                                    <p className="car-price">&pound; {car.price}
                                        <span className="car-monthly-price">from &pound;{(car.price / 12).toFixed(0)}/monthly</span>
                                    </p>
                                </div>
                                <div className="car-img-container">
                                    <Image className="car-img" width={150} height={460} alt={car.make} key={index} src={"/carsShowroom/" + car.img} />
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
                }
            </div>
        </section>
    );
}