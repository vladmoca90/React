export interface Car {
    img: string,
    make: string;
    model: string;
    price: number;
    year: number;
}

export const AllCars: Car[] = [
    {
        img: 'audi.jpg',
        make: 'Audi',
        model: 'TT 2.0T FSI 2dr',
        price: 2989,
        year: 2007,
    },
    {
        img: 'mercedes-benz.jpg',
        make: 'Mercedes-Benz',
        model: 'S Class S500 4dr Auto',
        price: 6489,
        year: 2006,
    },
    {
        img: 'vauxhall.jpg',
        make: 'Vauxhall',
        model: 'Mokka 1.6 CDTi Limited Edition 5dr',
        price: 5789,
        year: 2015,
    }
];