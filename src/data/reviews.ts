export interface Review {
    id: string;
    author: string;
    rating: number;
    quote: string;
    avatar: string;
}

export const reviews: Review[] = [
    {
        id: '1',
        author: 'Sarah J.',
        rating: 5,
        quote: "The brown sugar pearls here are next level. Literally the best in Perth!",
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    {
        id: '2',
        author: 'Mike T.',
        rating: 5,
        quote: "Love the aesthetic! The shop looks like a sticker sheet and the tea is 10/10.",
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike'
    },
    {
        id: '3',
        author: 'Leila K.',
        rating: 4,
        quote: "Neon Mango Fizz is so refreshing on a hot Perth day. Highly recommend!",
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Leila'
    }
];
