
import type { ImageMetadata } from 'astro';
import brownSugar from '../assets/images/products/brown-sugar.png';
import mangoFizz from '../assets/images/products/mango-fizz.png';
import taroSlush from '../assets/images/products/taro-slush.png';
import matchaMonster from '../assets/images/products/matcha-monster.png';
import strawberryPop from '../assets/images/products/strawberry-pop.png';

export interface Product {
    id: string;
    name: string;
    price: number;
    category: 'Milk Tea' | 'Fruit Tea' | 'Dessert' | 'Toppings';
    image: ImageMetadata;
    ingredients: string[];
    allergens: string[];
    tags: ('bestSeller' | 'limited' | 'veganOption' | 'glutenFriendly')[];
    sweetnessDefault: number;
    description: string;
}

export const products: Product[] = [
    {
        id: 'signature-brown-sugar',
        name: 'OG Brown Sugar Pearl',
        price: 8.5,
        category: 'Milk Tea',
        image: brownSugar,
        ingredients: ['Fresh Milk', 'Brown Sugar Syrup', 'Tapioca Pearls'],
        allergens: ['Dairy'],
        tags: ['bestSeller'],
        sweetnessDefault: 100,
        description: 'The one that started it all. Caramelly, creamy, and iconic.'
    },
    {
        id: 'neon-mango-fizz',
        name: 'Neon Mango Fizz',
        price: 7.9,
        category: 'Fruit Tea',
        image: mangoFizz,
        ingredients: ['Green Tea', 'Mango Puree', 'Popping Boba', 'Soda'],
        allergens: [],
        tags: ['limited', 'veganOption'],
        sweetnessDefault: 70,
        description: 'A tropical explosion with a bubbly kick.'
    },
    {
        id: 'taro-sticker-slush',
        name: 'Taro Sticker Slush',
        price: 8.2,
        category: 'Dessert',
        image: taroSlush,
        ingredients: ['Real Taro Root', 'Coconut Milk', 'Sago'],
        allergens: [],
        tags: ['veganOption', 'glutenFriendly'],
        sweetnessDefault: 50,
        description: 'Purple rain in a cup. Thick, creamy taro goodness.'
    },
    {
        id: 'matcha-monster',
        name: 'Matcha Monster',
        price: 8.8,
        category: 'Milk Tea',
        image: matchaMonster,
        ingredients: ['Ceremonial Matcha', 'Oat Milk', 'Red Bean'],
        allergens: [],
        tags: ['bestSeller', 'veganOption'],
        sweetnessDefault: 50,
        description: 'Earth-shaking matcha power-up.'
    },
    {
        id: 'strawberry-pop-rock',
        name: 'Strawberry Pop Rock',
        price: 8.0,
        category: 'Fruit Tea',
        image: strawberryPop,
        ingredients: ['Black Tea', 'Fresh Strawberries', 'Lychee Jelly'],
        allergens: [],
        tags: ['bestSeller'],
        sweetnessDefault: 80,
        description: 'Sweet, tart, and totally poppable.'
    }
];
