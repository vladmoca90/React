export interface tubeStatus {
    color: statusColors,
    name: string,
    status: string,
}

export enum statusColors {
    Green = 'Green',
    Orange = 'Orange',
    Red = 'Red',
}

export const tubeLines: tubeStatus[] = [
    {
        color: statusColors.Green,
        name: 'Bakerloo',
        status: 'Good service',
    },
    {
        color: statusColors.Green,
        name: 'Central',
        status: 'Good service',
    },
    {
        color: statusColors.Green,
        name: 'Circle',
        status: 'Good service',
    },
    {
        color: statusColors.Red,
        name: 'District',
        status: 'Partially closed',
    },
    {
        color: statusColors.Orange,
        name: 'Hammersmith & City',
        status: 'Partially closed',
    },
    {
        color: statusColors.Green,
        name: 'Jubilee',
        status: 'Good service',
    },
    {
        color: statusColors.Orange,
        name: 'Metropolitan',
        status: 'Partially closed',
    },
    {
        color: statusColors.Green,
        name: 'Northern',
        status: 'Good service',
    },
    {
        color: statusColors.Green,
        name: 'Picadilly',
        status: 'Good service',
    },
    {
        color: statusColors.Green,
        name: 'Victoria',
        status: 'Good service',
    },
    {
        color: statusColors.Red,
        name: 'Waterloo & City',
        status: 'Closed',
    },
    {
        color: statusColors.Green,
        name: 'London Overground',
        status: 'Good service',
    },
    {
        color: statusColors.Green,
        name: 'Tfl Rail',
        status: 'Good service',
    },
    {
        color: statusColors.Green,
        name: 'DLR',
        status: 'Good service',
    },
    {
        color: statusColors.Red,
        name: 'Croydon Tram',
        status: 'Closed',
    },
]