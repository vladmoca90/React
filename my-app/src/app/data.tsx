export interface tubeStatus {
    color: StatusColors,
    name: string,
    status: string,
}

export enum StatusColors {
    Green = 'green',
    Orange = 'orange',
    Red = 'red',
}

export const tubeLines: tubeStatus[] = [
    {
        color: StatusColors.Green,
        name: 'Bakerloo',
        status: 'Good service',
    },
    {
        color: StatusColors.Green,
        name: 'Central',
        status: 'Good service',
    },
    {
        color: StatusColors.Green,
        name: 'Circle',
        status: 'Good service',
    },
    {
        color: StatusColors.Red,
        name: 'District',
        status: 'Partially closed',
    },
    {
        color: StatusColors.Orange,
        name: 'Hammersmith & City',
        status: 'Partially closed',
    },
    {
        color: StatusColors.Green,
        name: 'Jubilee',
        status: 'Good service',
    },
    {
        color: StatusColors.Orange,
        name: 'Metropolitan',
        status: 'Partially closed',
    },
    {
        color: StatusColors.Green,
        name: 'Northern',
        status: 'Good service',
    },
    {
        color: StatusColors.Green,
        name: 'Picadilly',
        status: 'Good service',
    },
    {
        color: StatusColors.Green,
        name: 'Victoria',
        status: 'Good service',
    },
    {
        color: StatusColors.Red,
        name: 'Waterloo & City',
        status: 'Closed',
    },
    {
        color: StatusColors.Green,
        name: 'London Overground',
        status: 'Good service',
    },
    {
        color: StatusColors.Green,
        name: 'Tfl Rail',
        status: 'Good service',
    },
    {
        color: StatusColors.Green,
        name: 'DLR',
        status: 'Good service',
    },
    {
        color: StatusColors.Red,
        name: 'Croydon Tram',
        status: 'Closed',
    },
]