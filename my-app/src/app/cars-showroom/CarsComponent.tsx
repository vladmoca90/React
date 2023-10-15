"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { allCars } from './data';
import { CarsFilterComponent } from './CarsFilterComponent';

export default function CarsComponent() {
    const [cars] = useState(allCars);

    let carsShowroomUrl = "http://localhost:3000/cars-showroom";

    useEffect(() => {
        fetch(carsShowroomUrl)
            .then(
                (response) => {
                    console.log(response);
                },
                (error) => {
                    console.log(error);
                });
    }, [carsShowroomUrl]);

    return (
        <section className="box">
            <CarsFilterComponent />
            <div className="showroom-container">
                {
                    cars.map((car, index) => {
                        return (
                            <div className="car-container" key={index}>
                                <div className="car-header">
                                    <h3 className="car-title">{car.make}<span>{car.model}</span></h3>
                                    <p className="car-price">&pound;{car.price}
                                        <span className="car-monthly-price">from &pound;{(car.price / 12).toFixed(0)}/monthly</span>
                                    </p>
                                </div>
                                <div className="car-img-container">
                                    <Image alt={car.make} className="car-img" width={465} height={100} key={index} src={"/carsShowroom/" + car.img} />
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