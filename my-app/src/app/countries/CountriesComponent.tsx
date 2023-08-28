/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';
import { CountriesList } from './data';

export default function CountriesComponent() {
    const [countries] = useState(CountriesList);

    return (
        <div>
            {
                countries.map((country, index) => {
                    return (
                        <div key={index}>{country.name}</div>
                    );
                })
            }
        </div>
    );
}