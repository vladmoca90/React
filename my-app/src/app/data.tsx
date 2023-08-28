export interface Car {
    color: CarsColor,
    img: string,
    make: string;
    model: string;
    price: number;
    year: number;
}

export enum CarsColor {
    Black = 'Black',
    Blue = 'Blue',
    Red = 'Red',
    White = 'White',
}

export const allCars: Car[] = [
    {
        color: CarsColor.Black,
        img: 'audi.jpg',
        make: 'Audi',
        model: 'TT 2.0T FSI 2dr',
        price: 2989,
        year: 2007,
    },
    {
        color: CarsColor.White,
        img: 'land-rover.jpg',
        make: 'Land Rover',
        model: 'Discovery 2.7 Td V6 HSE 5dr Auto',
        price: 4489,
        year: 2009,
    },
    {
        color: CarsColor.Red,
        img: 'mercedes-benz.jpg',
        make: 'Mercedes-Benz',
        model: 'S Class S500 4dr Auto',
        price: 6489,
        year: 2006,
    },
    {
        color: CarsColor.Black,
        img: 'nissan.jpg',
        make: 'Nissan',
        model: 'Fairlady Turbo 3.5 V6 300 GT 3d',
        price: 9989,
        year: 2007,
    },
    {
        color: CarsColor.Red,
        img: 'skoda.jpg',
        make: 'Skoda',
        model: 'Fabia 1.2 TSI SE 5dr',
        price: 2489,
        year: 2011,
    },
    {
        color: CarsColor.Blue,
        img: 'vauxhall.jpg',
        make: 'Vauxhall',
        model: 'Mokka 1.6 CDTi Limited Edition 5dr',
        price: 5789,
        year: 2015,
    }
];