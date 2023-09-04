export interface Food {
    img: string,
    name: string,
    price: number,
    quantity: number,
    unit: string,
}

export const allFoods: Food[] = [
    {
        img: 'cheese.PNG',
        name: 'Cheese',
        price: 7.99, //per kg
        quantity: .4,
        unit: 'kg',
    },
    {
        img: 'chocolate.PNG',
        name: 'Chocolate',
        price: 1.89, //per 100g
        quantity: 225,
        unit: 'g',
    },
    {
        img: 'cucumber.PNG',
        name: 'Cucumber',
        price: 3.49, //per piece
        quantity: 1.5,
        unit: 'kg',
    },
    {
        img: 'milk.PNG',
        name: 'Milk',
        price: .99, //per pint
        quantity: 3.5,
        unit: 'pint',
    },
    {
        img: 'onion.PNG',
        name: 'Onion',
        price: .79, //each
        quantity: 4,
        unit: 'piece',
    },
    {
        img: 'pork-meat.PNG',
        name: 'Meat (pork)',
        price: 4.99, //per kg
        quantity: 1.5,
        unit: 'kg',
    },
    {
        img: 'tomato.PNG',
        name: 'Tomatoes',
        price: 3.99, //per kg
        quantity: 1.15,
        unit: 'kg',
    },
    {
        img: 'whiskey.PNG',
        name: 'Whiskey',
        price: 19.99, //per bottle
        quantity: 2,
        unit: 'piece',
    },
];