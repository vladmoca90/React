import React, { useCallback, useState } from 'react';
import Image from 'next/image'
import { allFoods } from './data';

export const FoodCalculusComponent = () => {
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
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}