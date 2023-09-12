"use client";
import React, { useCallback } from 'react';
import { Food } from './data';

export type foodsProps = {
    foods: Food[],
}

export const FoodCalculusComponent = (props: foodsProps) => {
    const totalPrice = useCallback(((foods: Food[]) => {
        let sum = 0;

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