interface winesProp {
    id: number;
    name: string;
    img: string;
}

const wines: winesProp[] = [
    {
        id: 1,
        name: 'Italian Red Wine',
        img: './wineImages/italian-red.jpg',
    },
    {
        id: 2,
        name: 'Chilean Dry White',
        img: './wineImages/chilean-dry-white.jpg',
    },
    {
        id: 3,
        name: 'NZ Savignon Blanc',
        img: './wineImages/nz-savignon-blanc.jpg',
    },
    {
        id: 4,
        name: 'Spanish Dry White',
        img: './wineImages/spanish-dry-white.jpg',
    },
    {
        id: 5,
        name: 'Californian Chardonnay',
        img: './wineImages/californian-chardonnay.jpg',
    },
    {
        id: 6,
        name: 'Pinot Noir Romania',
        img: './wineImages/romania-pinot-noir.jpg',
    }
];

export default wines;