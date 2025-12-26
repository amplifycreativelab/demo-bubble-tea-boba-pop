import type { ImageMetadata } from 'astro';
import galacticGrape from '../assets/images/specials/galactic-grape.png';
import popcorn from '../assets/images/specials/popcorn.png';

export interface Special {
    id: string;
    title: string;
    description: string;
    image: ImageMetadata;
    badge: 'NEW' | 'LIMITED';
    price: string;
}

export const specials: Special[] = [
    {
        id: 'galactic-grape',
        title: 'Galactic Grape Smash',
        description: 'Crushed grapes with butterfly pea tea and cloud foam.',
        image: galacticGrape,
        badge: 'LIMITED',
        price: '$9.50'
    },
    {
        id: 'popcorn-milk-tea',
        title: 'Popcorn Milk Tea',
        description: 'Toasty popcorn flavor with salted caramel sub-pearls.',
        image: popcorn,
        badge: 'NEW',
        price: '$8.90'
    }
];
