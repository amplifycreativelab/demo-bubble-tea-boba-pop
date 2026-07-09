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
        quote: "The brown sugar pearls here are next level. Easily one of my favourites.",
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
        quote: "Neon Mango Fizz is so refreshing on a hot day. Highly recommend!",
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Leila'
    },
    {
        id: '4',
        author: 'Dev P.',
        rating: 5,
        quote: "Taro slush with cloud foam changed my life. I'm here three times a week, no shame.",
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dev'
    },
    {
        id: '5',
        author: 'Emma R.',
        rating: 5,
        quote: "Ordered catering for our office party and the boba bar was the highlight of the year.",
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'
    },
    {
        id: '6',
        author: 'Jayden W.',
        rating: 5,
        quote: "The matcha here actually tastes like matcha. Strong, creamy, and the pearls are perfect.",
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jayden'
    }
];
