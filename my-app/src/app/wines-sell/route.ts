import { NextResponse } from 'next/server';

export interface Wine {
    category: WineCategory;
    name: string;
    img: string;
}

export enum WineCategory {
    Red = 'Red',
    White = 'White',
    Green = 'Green',
}

export const allWines: Wine[] = [
    {
        name: 'Italian Red Wine',
        img: 'italian-red.jpg',
        category: WineCategory.Red,
    },
    {
        name: 'Chilean Dry White',
        img: 'chilean-dry-white.jpg',
        category: WineCategory.White,
    },
    {
        name: 'NZ Savignon Blanc',
        img: 'nz-savignon-blanc.jpg',
        category: WineCategory.White,
    },
    {
        name: 'Spanish Dry White',
        img: 'spanish-dry-white.jpg',
        category: WineCategory.White,
    },
    {
        name: 'Californian Chardonnay',
        img: 'californian-chardonnay.jpg',
        category: WineCategory.White,
    },
    {
        name: 'Pinot Noir Romania',
        img: 'romania-pinot-noir.jpg',
        category: WineCategory.Red,
    },
    {
        name: 'Vinho Verde Portugal',
        img: 'portugal-vinho-verde.jpg',
        category: WineCategory.Green,
    }
];

export async function GET() {
    return NextResponse.json(allWines)
}