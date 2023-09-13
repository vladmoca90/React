"use client";
import React, { useState } from 'react';
import Image from 'next/image'
import { allFoods } from './data';
import { FoodCalculusComponent } from './FoodCalculusComponent';

export default function FoodListComponent() {
    const [foods] = useState(allFoods);

    return (
        <main className="main">
            <div className="container-table">
                <table className="table-main table">
                    <thead className="table-header">
                        <tr>
                            <th scope="col">Picture</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total price</th>
                        </tr>
                    </thead>
                    <tbody className="table-content">
                        {
                            foods.map((food, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="food-image">
                                            <Image width={150} height={150} className="product-img" src={'/foodList/' + food.img} alt={food.name} />
                                        </td>
                                        <td className="food-name">{food.name}</td>
                                        <td className="food-price">{food.price}</td>
                                        <td className="food-quantity">{food.quantity}</td>
                                        <td className="food-total-price">{(food.price * food.quantity).toFixed(2)}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
            <FoodCalculusComponent foods={[]} />
        </main>
    );
}

//Sample or the original code

/*
const calculateTotalPrice = useCallback(() => {
    let sum = 0;

    for (let i = 0; i < foods.length; i++) {
        ;
        sum += (foods[i].price) * (foods[i].quantity);
    };

    return sum.toFixed(2);
}, [foods]);

const calculateAveragePrice = useCallback(() => {
    let average = 0;

    for (let i = 0; i < foods.length; i++) {
        average += (foods[i].price * foods[i].quantity) / (foods.length);
    }

    return average;
}, [foods]);
*/