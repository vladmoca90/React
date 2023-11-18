"use client";
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { Car } from './APIs/cars-showroom/route';

export default function CarsComponent() {
    const [cars, setCars] = useState<Car[]>([]);
    const [error, setError] = useState<String>();
    const [selectedOption, setSelectedOption] = useState<String>();

    let carsShowroomUrl = "http://localhost:3000/APIs/cars-showroom";

    useEffect(() => {
        fetch(carsShowroomUrl)
            .then((response) => response)
            .then(e => e.json())
            .then(e => setCars(e as Car[]))
            .catch(error =>
                setError(error))
    }, [carsShowroomUrl]);

    //A function that removes the duplicates from the array and display each value once in the dropdown
    const removeDuplicatedMakes = useCallback(() => {
        let carsDictionary: { [make: string[number]]: any } = {};

        for (let i = 0; i < cars.length; i++) {
            if (carsDictionary[cars[i].make]) {
                continue;
            }
            else {
                carsDictionary[cars[i].make] = cars;
            }
        }

        return Object.keys(carsDictionary);
    }, [cars])

    console.log(removeDuplicatedMakes());

    const selectMake = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
    }, [])

    return (
        <section className="box">
            <div className="showroom-search">
                <select id="carMake" title="carMake" onChange={selectMake}>
                    <option value="make">-- Any Make --</option>
                    {
                        removeDuplicatedMakes().map((car, index) => {
                            return (
                                <option value={car} key={index}>{car}</option>
                            );
                        })
                    }
                </select>
                <select id="carModel" title="carModel" disabled>
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
            <div className="showroom-container">
                {
                    cars.map((car, index) => {
                        return (
                            <div className="car-container" key={index}>
                                <div className="car-header">
                                    <h3 className="car-title">{car.make} <span>{car.model}</span></h3>
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