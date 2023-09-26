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
        name: 'Dark Chocolate',
        price: 1.89, //per 100g
        quantity: 2.5, //as 250g
        unit: 'g',
    },
    {
        img: 'cucumber.PNG',
        name: 'Cucumber',
        price: 3.49, //per kg
        quantity: 1.5,
        unit: 'kg',
    },
    {
        img: 'milk.PNG',
        name: 'Milk',
        price: 0.99, //per pint
        quantity: 3,
        unit: 'pint',
    },
    {
        img: 'onion.PNG',
        name: 'Onion',
        price: 0.99, //each
        quantity: 4,
        unit: 'piece',
    },
    {
        img: 'pork-meat.PNG',
        name: 'Meat (pork)',
        price: 6.99, //per kg
        quantity: 1.5,
        unit: 'kg',
    },
    {
        img: 'tomato.PNG',
        name: 'Tomatoes',
        price: 3.99, //per kg
        quantity: 1,
        unit: 'kg',
    },
    {
        img: 'whiskey.PNG',
        name: 'Whiskey',
        price: 19.99, //per bottle
        quantity: 2,
        unit: 'piece',
    }
];