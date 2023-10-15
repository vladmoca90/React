"use client";
import { useCallback, useState } from 'react';
import { allFoods } from '../APIs/food-list/data';

export const FoodListTotalsComponent = () => {
    const [foods] = useState(allFoods);

    //A function that calculates the total price
    const calculateTotalPrice = useCallback(() => {
        let sum = 0;

        for (let i = 0; i < foods.length; i++) {
            sum += (foods[i].price) * (foods[i].quantity);
        }

        return sum;
    }, [foods]);

    //A function that calculates the average price of all items combined
    const calculateAveragePrice = useCallback(() => {
        let average = 0;

        for (let i = 0; i < foods.length; i++) {
            average += (foods[i].price * foods[i].quantity) / (foods.length);
        }

        return average;
    }, [foods]);

    //A function that returns the highest price of an item
    const getMostExpensiveItem = useCallback(() => {
        let expensive = foods[0].price;

        for (let i = 0; i < foods.length; i++) {
            if (foods[i].price > expensive) {
                expensive = foods[i].price;
            }
        }

        return expensive;
    }, [foods]);

    //A function that returns the smallest price of an item
    const getCheapestItem = useCallback(() => {
        let cheapest = foods[0].price;

        for (let i = 0; i < foods.length; i++) {
            if (foods[i].price < cheapest) {
                cheapest = foods[i].price;
            }
        }

        return cheapest;
    }, [foods]);

    //A function the returns the most common unit of measurement
    const getMostCommonUnit = useCallback(() => {
        let common: string | undefined;
        let maxCount = 0;

        for (let i = 0; i < foods.length; i++) {
            let count = 0;

            for (let j = 0; j < foods.length; j++) {
                if (foods[i].unit == foods[j].unit) {
                    count++;
                }
                if (count > maxCount) {
                    maxCount = count;
                    common = foods[i].unit;
                }
            }
        }

        return common;
    }, [foods]);

    return (
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
    );
}