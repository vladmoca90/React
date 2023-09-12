"use client";
import React, { useCallback } from 'react';
import { Food } from './data';

export type FoodCalculusProps = {
    foods: Food[],
    accumulator: number,
    value: number,
}

export const FoodCalculusComponent = (props: FoodCalculusProps) => {
    const totalPrice = useCallback(((foods: Food[]) => {
        let sum = foods.reduce((accumulator, value) => accumulator + value);

      }), []);

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
                        <td>{totalPrice()}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}