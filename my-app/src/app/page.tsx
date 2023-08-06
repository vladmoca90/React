/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './wine-sell.css';
import WinesComponent from './WinesComponent';

//A constant that populates the product with wines
// export const allWines = 

//A constant that populates the dropdown

export default function MainPage() {
    return (<WinesComponent />);
}