export interface Line {
    name: string,
    status: LineStatus,
}

export enum LineStatus {
    Closed = 'Closed',
    Good = 'Good',
    PartSuspended = 'PartSuspended',
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
        status: LineStatus.PartSuspended,
    },
    {
        name: 'Hammersmith & City',
        status: LineStatus.PartSuspended,
    },
    {
        name: 'Jubilee',
        status: LineStatus.Good,
    },
    {
        name: 'Metropolitan',
        status: LineStatus.PartSuspended,
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