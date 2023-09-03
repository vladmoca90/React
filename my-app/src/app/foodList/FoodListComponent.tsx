import React, { useState } from 'react';
import Image from 'next/image'
import { allFoods } from './data';

//https://blog.teamtreehouse.com/javascript-array-methods-reduce 

export default function FoodListComponent() {
    const [foods] = useState(allFoods);

    return (
        <main className="main">
            <div className="container-table">
                <table className="table-main table">
                    <thead className="table-header">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody className="table-content">
                        {
                            foods.map((food, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="food-image"><Image className="food-img" src={'/foodList/' + food.img} alt={food.name} /></td>
                                        <td className="food-name">{food.name}</td>
                                        <td className="food-price">{food.price}</td>
                                        <td className="food-quantity">{food.quantity}</td>
                                        <td className="food-total-price"></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </main>
    );
}