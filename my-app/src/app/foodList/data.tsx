export interface Food {
    name: string,
    price: number,
    quantity: number,
    unit: string,
}

export const allFoods: Food[] = [
    {
        name: 'Tomatoes',
        price: 2.99, //per kg
        quantity: 1.5,
        unit: 'kg',
    }
];