import React, { useCallback, useState } from 'react';
import Image from 'next/image'
import { allFoods } from './data';

export default function FoodListComponent() {
    const [foods] = useState(allFoods);

    const calculateTotalPrice = useCallback(() => {
        let sum = 0;

        for (let i = 0; i < foods.length; i++) {
            sum += (foods[i].price) * (foods[i].quantity);
        };

        return sum;
    }, [foods]);

    const calculateAveragePrice = useCallback(() => {
        let average = 0;

        for (let i = 0; i < foods.length; i++) {
            average += (foods[i].price * foods[i].quantity) / (foods.length);
        }

        return average;
    }, [foods]);

    /* const mostExpensiveItem = useCallback(() => {
         let expensive = foods[0].price;
 
         for(let i = 0; i < foods.length; i++) {
            if(food[i].price < food[0].price)
         }

         return expensive;
     }, [foods]); */

    return (
        <main className="main">
            <div className="container-table">
                <table className="table-main table">
                    <thead className="table-header">
                        <tr>
                            <th scope="col">Picture</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Unit</th>
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
            <div className="container-calculus" >
                <table className="table-main table table-container-calculus">
                    <thead className="table-header table-header-calculus">
                        <tr>
                            <th scope="col">Total amount to pay</th>
                            <th scope="col">Total number of items</th>
                            <th scope="col">Average price of each item</th>
                            <th scope="col">Cheapest item</th>
                            <th scope="col">Most expensive item</th>
                            <th scope="col">Most common unit</th>
                        </tr>
                    </thead>
                    <tbody className="table-content table-content-calculus">
                        <tr>
                            <td>&pound;{calculateTotalPrice().toFixed(2)}</td>
                            <td>{foods.length}</td>
                            <td>&pound;{calculateAveragePrice().toFixed(2)}</td>
                            <td>&pound;{}</td>
                            <td>&pound;{}</td>
                            <td>{}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
}