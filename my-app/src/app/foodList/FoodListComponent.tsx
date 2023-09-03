import React, { useState } from 'react';
import Image from 'next/image'
import { allFoods } from './data';

export default function FoodListComponent() {
    const foods = useState(allFoods);

    return (
        <main className="main">
            <div className="container-table">
                <table className="table-main table">
                    <thead className="table-header">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Destinations</th>
                        </tr>
                    </thead>
                    <tbody className="table-content">
                        {
                            foods.map((food, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="food-image"></td>
                                        <td className="food-name"></td>
                                        <td className="food-price"></td>
                                        <td className="food-quantity"></td>
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