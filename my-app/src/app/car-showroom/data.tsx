export interface Car {
    make: string;
    model: string;
    price: number;
    year: number;
}

export const AllCars: Car[] = [
    {
        make: 'Audi',
        model: 'TT 2.0T FSI 2dr',
        price: 2989,
        year: 2007,
    },
    {
        make: 'Mercedes-Benz',
        model: 'S Class S500 4dr Auto',
        price: 6489,
        year: 2006,
    },
    {
        make: 'Vauxhall',
        model: 'Mokka 1.6 CDTi Limited Edition 5dr',
        price: 5789,
        year: 2015,
    }
];