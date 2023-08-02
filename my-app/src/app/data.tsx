interface winesProp {
    id: number;
    name: string;
    img: string;
}

const wines: winesProp[] = [
    {
        id: 1,
        name: 'Italian Red Wine',
        img: './wineImages/italianred.jpg',
    },
    {
        id: 2,
        name: 'Chilean Dry White',
        img: './wineImages/chileandrywhite.jpg',
    },
    {
        id: 3,
        name: 'NZ Savignon Blanc',
        img: './wineImages/nzsavignonblanc.jpg',
    },
    {
        id: 4,
        name: 'Spanish Dry White',
        img: './wineImages/spanishdrywhite.jpg',
    },
    {
        id: 5,
        name: 'Californian Chardonnay',
        img: './wineImages/californianchardonnay.jpg',
    },
    {
        id: 6,
        name: 'Pinot Noir Romania',
        img: './wineImages/romaniapinotnoir.jpg',
    }
];

export default wines;