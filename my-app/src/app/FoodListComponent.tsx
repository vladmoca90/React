import React, { useCallback, useState } from 'react';
import Image from 'next/image'
import { allFoods } from './data';
import { FoodCalculusComponent } from './FoodCalculusComponent';

//https://blog.teamtreehouse.com/javascript-array-methods-reduce 
//https://www.crocoder.dev/blog/map-filter-reduce-exercises/
//

//total money spent, median and mean of prices, total prices,
//display elements based on a condition
//display most expensive and cheapest + difference between cheapest and the most expensive
//add new element to the object


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
                                        <td className="food-total-price"></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
            <FoodCalculusComponent foods={foods} accumulator={0} value={0} />
        </main>
    );
}