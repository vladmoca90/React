import { NextResponse } from 'next/server';

export interface Car {
    img: string,
    make: string,
    model: string,
    price: number,
    year: number,
}

export const allCars: Car[] = [
    {
        img: 'audi.jpg',
        make: 'Audi',
        model: 'TT 2.0T FSI 2dr',
        price: 2989,
        year: 2007,
    },
    {
        img: 'audi.jpg',
        make: 'Audi',
        model: 'Q5 2.0T FSI Quattro S Line Special Ed 5dr S Tronic',
        price: 9999,
        year: 2011,
    },
    {
        img: 'land-rover.jpg',
        make: 'Land Rover',
        model: 'Discovery 3',
        price: 5999,
        year: 2006,
    },
    {
        img: 'land-rover.jpg',
        make: 'Land Rover',
        model: 'Discovery 2.7 Td V6 HSE 5dr Auto',
        price: 4489,
        year: 2009,
    },
    {
        img: 'mercedes-benz.jpg',
        make: 'Mercedes-Benz',
        model: 'S Class S500 4dr Auto',
        price: 6489,
        year: 2006,
    },
    {
        img: 'mercedes-benz.jpg',
        make: 'Mercedes-Benz',
        model: 'C Class C220 CDI Blue AMG Sport 4dr',
        price: 5499,
        year: 2012,
    },
    {
        img: 'nissan.jpg',
        make: 'Nissan',
        model: 'Fairlady Turbo 3.5 V6 300 GT 3d',
        price: 9449,
        year: 2007,
    },
    {

        img: 'nissan.jpg',
        make: 'Nissan',
        model: 'Pathfinder 2.5 dCi 171 Acenta 5dr',
        price: 4280,
        year: 2010,
    },
    {
        img: 'skoda.jpg',
        make: 'Skoda',
        model: 'Fabia 1.2 TSI SE 5dr',
        price: 2489,
        year: 2011,
    },
    {
        img: 'skoda.jpg',
        make: 'Skoda',
        model: 'Octavia 2.0T FSI vRS 5dr',
        price: 7499,
        year: 2011,
    },
    {
        img: 'vauxhall.jpg',
        make: 'Vauxhall',
        model: 'Mokka 1.6 CDTi Limited Edition 5dr',
        price: 5712,
        year: 2015,
    },
    {
        img: 'vauxhall.jpg',
        make: 'Vauxhall',
        model: 'Ampera 111kW Electron 5dr Auto',
        price: 11499,
        year: 2014,
    },
];

export async function GET() {
    return NextResponse.json(allCars)
}