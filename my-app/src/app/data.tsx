interface winesProp {
    name: string;
    img: string;
}

const wines: winesProp[] = [
    {
        name: 'Italian Red Wine',
        img: './wineImages/italian-red.jpg',
    },
    {
        name: 'Chilean Dry White',
        img: './wineImages/chilean-dry-white.jpg',
    },
    {
        name: 'NZ Savignon Blanc',
        img: './wineImages/nz-savignon-blanc.jpg',
    },
    {
        name: 'Spanish Dry White',
        img: './wineImages/spanish-dry-white.jpg',
    },
    {
        name: 'Californian Chardonnay',
        img: './wineImages/californian-chardonnay.jpg',
    },
    {
        name: 'Pinot Noir Romania',
        img: './wineImages/romania-pinot-noir.jpg',
    }
];

export default wines;