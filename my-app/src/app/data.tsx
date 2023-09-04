export interface Food {
    img: string,
    name: string,
    price: number,
    quantity: number,
    unit: string,
}

export const allFoods: Food[] = [
    {
        img: 'cheese.png',
        name: 'Cheese',
        price: 7.99, //per kg
        quantity: .4,
        unit: 'kg',
    },
    {
        img: 'chocolate.png',
        name: 'Chocolate',
        price: 1.89, //per 100g
        quantity: 225,
        unit: 'g',
    },
    {
        img: 'cucumber.png',
        name: 'Cucumber',
        price: 3.49, //per piece
        quantity: 1.5,
        unit: 'kg',
    },
    {
        img: 'milk.png',
        name: 'Milk',
        price: .99, //per pint
        quantity: 3.5,
        unit: 'pint',
    },
    {
        img: 'onion.png',
        name: 'Onion',
        price: .79, //each
        quantity: 4,
        unit: 'piece',
    },
    {
        img: 'pork-meat.png',
        name: 'Meat (pork)',
        price: 4.99, //per kg
        quantity: 1.5,
        unit: 'kg',
    },
    {
        img: 'tomato.png',
        name: 'Tomatoes',
        price: 3.99, //per kg
        quantity: 1.15,
        unit: 'kg',
    },
    {
        img: 'whiskey.png',
        name: 'Whiskey',
        price: 19.99, //per bottle
        quantity: 2,
        unit: 'piece',
    },
];