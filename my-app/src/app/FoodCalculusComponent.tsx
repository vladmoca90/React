"use client";
import React, { useCallback } from 'react';
import { Food } from './data';

export type FoodProps = {
    foods: Food[];
}

export const FoodCalculusComponent = (props: FoodProps) => {
    const calculateTotalPrice = useCallback((foods: Food[]) => {
        let sum = 0;

        for (const food of foods) {
            sum += (props.foods.price) * (props.foods.quantity);
        };

        return sum;
    }, []);

   /* const calculateAveragePrice = useCallback(() => {
        let average = 0;

        for (let i = 0; i < foods.length; i++) {
            average += (foods[i].price * foods[i].quantity) / (foods.length);
        }

        return average;
    }, []); */

    return (
        <div className="container-calculus" >
            <table className="table-main table table-container-calculus">
                <thead className="table-header table-header-calculus">
                    <tr>
                        <th scope="col">Total amount to pay</th>
                        <th scope="col">Average price of each item</th>
                        <th scope="col">Cheapest item</th>
                        <th scope="col">Most expensive item</th>
                    </tr>
                </thead>
                <tbody className="table-content table-content-calculus">
                    <tr>
                        <td>&pound;{calculateTotalPrice().toFixed(3)}</td>
                        <td>&pound;{calculateAveragePrice().toFixed(3)}</td>
                        <td>&pound;</td>
                        <td>&pound;</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}