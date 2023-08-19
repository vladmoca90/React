export interface Line {
    name: string,
    status: string,
}

export enum LineStatus {
    Closed = 'Closed',
    Good = 'Good service',
    PartiallyClosed = 'Partially closed',
}

export const tubeLines: Line[] = [
    {
        name: 'Bakerloo',
        status: 'Good service',
    },
    {
        name: 'Central',
        status: 'Good service',
    },
    {
        name: 'Circle',
        status: 'Good service',
    },
    {
        name: 'District',
        status: 'Partially closed',
    },
    {
        name: 'Hammersmith & City',
        status: 'Partially closed',
    },
    {
        name: 'Jubilee',
        status: 'Good service',
    },
    {
        name: 'Metropolitan',
        status: 'Partially closed',
    },
    {
        name: 'Northern',
        status: 'Good service',
    },
    {
        name: 'Picadilly',
        status: 'Good service',
    },
    {
        name: 'Victoria',
        status: 'Good service',
    },
    {
        name: 'Waterloo & City',
        status: 'Closed',
    },
    {
        name: 'London Overground',
        status: 'Good service',
    },
    {
        name: 'Tfl Rail',
        status: 'Good service',
    },
    {
        name: 'DLR',
        status: 'Good service',
    },
    {
        name: 'Croydon Tram',
        status: 'Closed',
    },
]