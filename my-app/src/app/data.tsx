export interface Line {
    name: string,
    status: LineStatus,
}

export enum LineStatus {
    Closed = 'Closed',
    Good = 'Good service',
    PartiallyClosed = 'Partially closed',
}

export const tubeLines: Line[] = [
    {
        name: 'Bakerloo',
        status: LineStatus.Good,
    },
    {
        name: 'Central',
        status: LineStatus.Good,
    },
    {
        name: 'Circle',
        status: LineStatus.Good,
    },
    {
        name: 'District',
        status: LineStatus.PartiallyClosed,
    },
    {
        name: 'Hammersmith & City',
        status: LineStatus.PartiallyClosed,
    },
    {
        name: 'Jubilee',
        status: LineStatus.Good,
    },
    {
        name: 'Metropolitan',
        status: LineStatus.PartiallyClosed,
    },
    {
        name: 'Northern',
        status: LineStatus.Good,
    },
    {
        name: 'Picadilly',
        status: LineStatus.Good,
    },
    {
        name: 'Victoria',
        status: LineStatus.Good,
    },
    {
        name: 'Waterloo & City',
        status: LineStatus.Closed,
    },
    {
        name: 'London Overground',
        status: LineStatus.Good,
    },
    {
        name: 'Tfl Rail',
        status: LineStatus.Good,
    },
    {
        name: 'DLR',
        status: LineStatus.Good,
    },
    {
        name: 'Croydon Tram',
        status: LineStatus.Closed,
    },
]