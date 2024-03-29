"use client";
import { useState, useCallback } from 'react';
import Image from 'next/image';
import { allFoods } from './api/food-list/data';

export default function FoodListComponent() {
    const [foods] = useState(allFoods);

    //A function that calculates the total price
    const calculateTotalPrice = useCallback(() => {
        let sum = 0;

        for (let i in foods) {
            sum += (allFoods[i].price) * (allFoods[i].quantity);
        }

        return sum;
    }, [foods]);

    //A function that calculates the average price of all items combined
    const calculateAveragePrice = useCallback(() => {
        let average = 0;

        for (let i in foods) {
            average += (allFoods[i].price * allFoods[i].quantity) / (foods.length);
        }

        return average;
    }, [foods]);

    //A function that returns the highest price of an item
    const getMostExpensiveItem = useCallback(() => {
        let expensive = allFoods[0].price;

        for (let i in foods) {
            if (allFoods[i].price > expensive) {
                expensive = allFoods[i].price;
            }
        }

        return expensive;
    }, [foods]);

    //A function that returns the smallest price of an item
    const getCheapestItem = useCallback(() => {
        let cheapest = allFoods[0].price;

        for (let i in foods) {
            if (allFoods[i].price < cheapest) {
                cheapest = allFoods[i].price;
            }
        }

        return cheapest;
    }, [foods]);

    //A function the returns the most common unit of measurement
    const getMostCommonUnit = useCallback(() => {
        let unitCount: { [unit: string]: number } = {};
        let maxUnit: string | undefined;
        let maxCount: number | undefined;

        for (let food of foods) {
            if (unitCount[food.unit]) {
                unitCount[food.unit] += 1;
            } else {
                unitCount[food.unit] = 1;
            }
        }

        for (const [unit, count] of Object.entries(unitCount)) {
            if (!maxCount) {
                maxCount = count;
                maxUnit = unit;
            } else {
                if (count > maxCount) {
                    maxCount = count;
                    maxUnit = unit;
                }
            }
        }

        return maxUnit;
    }, [foods]);

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
            <div className="container-calculus">
                <table className="table-main table table-container-calculus">
                    <thead className="table-header table-header-calculus">
                        <tr>
                            <th scope="col">Total amount to pay (&pound;)</th>
                            <th scope="col">Total number of items</th>
                            <th scope="col">Average price of items (&pound;)</th>
                            <th scope="col">Cheapest item (&pound;)</th>
                            <th scope="col">Most expensive item (&pound;)</th>
                            <th scope="col">Most common unit</th>
                        </tr>
                    </thead>
                    <tbody className="table-content table-content-calculus">
                        <tr>
                            <td>&pound;{calculateTotalPrice().toFixed(2)}</td>
                            <td>{foods.length}</td>
                            <td>&pound;{calculateAveragePrice().toFixed(2)}</td>
                            <td>&pound;{getCheapestItem()}</td>
                            <td>&pound;{getMostExpensiveItem()}</td>
                            <td>{getMostCommonUnit()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
}