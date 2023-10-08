"use client";
import { useState } from 'react';
import Image from 'next/image'
import { allFoods } from './data';
import { FoodListTotalsComponent } from './FoodListTotalsComponent';

export default function FoodListComponent() {
    const [foods] = useState(allFoods);

    //Before testing
    return (
        <main className="main">
            <div className="container-table">
                <table className="table-main table">
                    <thead className="table-header">
                        <tr>
                            <th scope="col">Picture</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price (&pound;)</th>
                            <th scope="col">Unit</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total price (&pound;)</th>
                        </tr>
                    </thead>
                    <tbody className="table-content">
                        {
                            foods.map((food, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="food-image">
                                            <Image alt={food.name} className="product-img" width={100} height={100} src={'/foodList/' + food.img} />
                                        </td>
                                        <td className="food-name">{food.name}</td>
                                        <td className="food-price">{food.price}</td>
                                        <td className="food-unit">{food.unit}</td>
                                        <td className="food-quantity">{food.quantity}</td>
                                        <td className="food-total-price">{(food.price * food.quantity).toFixed(2)}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
            <FoodListTotalsComponent />
        </main>
    );
}