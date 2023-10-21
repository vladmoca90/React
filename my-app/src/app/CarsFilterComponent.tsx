"use client";
import { useState } from 'react';
import { Car, allCars } from './APIs/cars-showroom/route';

export type CarsFilterProps = {
    cars: Car[];
}

export const CarsFilterComponent = (props: CarsFilterProps) => {
    const [cars] = useState(allCars);

    return (
        
    );
}