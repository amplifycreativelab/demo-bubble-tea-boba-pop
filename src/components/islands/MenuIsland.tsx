import { useState, useMemo } from 'preact/hooks';
import type { Product } from '../../data/products';
import { Search, Filter, Star, Zap, Leaf, Check } from 'lucide-preact';

// Define UI-specific Product type where image is a resolved string URL
export interface UIProduct extends Omit<Product, 'image'> {
    image: string;
}

interface Props {
    initialProducts: UIProduct[];
    baseUrl: string;
}

export default function MenuIsland({ initialProducts, baseUrl }: Props) {
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [activeTags, setActiveTags] = useState<string[]>([]);

    const categories = ['All', 'Milk Tea', 'Fruit Tea', 'Dessert', 'Toppings'];
    const tags = [
        { id: 'bestSeller', label: 'Best Sellers', icon: <Star size={16} /> },
        { id: 'limited', label: 'Limited', icon: <Zap size={16} /> },
        { id: 'veganOption', label: 'Vegan', icon: <Leaf size={16} /> },
        { id: 'glutenFriendly', label: 'Gluten Free', icon: <Check size={16} /> },
    ];

    const filteredProducts = useMemo(() => {
        return initialProducts.filter(p => {
            const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
            const matchesTags = activeTags.length === 0 || activeTags.every(tag => p.tags.includes(tag as any));
            return matchesSearch && matchesCategory && matchesTags;
        });
    }, [search, selectedCategory, activeTags]);

    const toggleTag = (tagId: string) => {
        setActiveTags(prev =>
            prev.includes(tagId) ? prev.filter(id => id !== tagId) : [...prev, tagId]
        );
    };

    return (
        <div className="space-y-12">
            {/* Controls */}
            <div className="bg-white border-3 border-ink rounded-squircle p-3 lg:p-8 shadow-hard sticky top-24 z-30">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
                    {/* Search */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search cravings..."
                            className="w-full bg-background border-3 border-ink rounded-xl pl-12 pr-4 py-2 lg:py-3 text-sm lg:text-base font-body focus:outline-none focus:ring-2 ring-primary/50 transition-all"
                            value={search}
                            onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40 z-10" size={20} />
                    </div>

                    {/* Categories */}
                    <div className="flex lg:flex-wrap overflow-x-auto lg:overflow-visible gap-2 -mx-1 px-1 py-2 lg:mx-0 lg:px-0 lg:py-0 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`flex-shrink-0 whitespace-nowrap px-3 py-1.5 lg:px-4 lg:py-2 font-heading text-sm lg:text-lg border-3 border-ink rounded-xl transition-all ${selectedCategory === cat ? 'bg-primary shadow-hard-sm -translate-y-1' : 'bg-background hover:bg-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Tags */}
                    <div className="flex lg:flex-wrap overflow-x-auto lg:overflow-visible gap-2 -mx-1 px-1 py-2 lg:mx-0 lg:px-0 lg:py-0 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {tags.map(tag => (
                            <button
                                key={tag.id}
                                onClick={() => toggleTag(tag.id)}
                                className={`flex-shrink-0 whitespace-nowrap flex items-center gap-2 px-2 py-1 lg:px-3 lg:py-2 font-body text-xs lg:text-sm border-2 border-ink rounded-full transition-all ${activeTags.includes(tag.id) ? 'bg-accent font-bold' : 'bg-white opacity-60'
                                    }`}
                            >
                                {tag.icon}
                                {tag.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, idx) => (
                    <div
                        key={product.id}
                        className={`sticker-card p-0 group flex flex-col overflow-hidden ${idx % 3 === 0 ? '-rotate-1' : idx % 3 === 1 ? 'rotate-1' : 'rotate-0'
                            }`}
                    >
                        {/* Product Image */}
                        <div className="h-64 border-b-3 border-ink relative overflow-hidden bg-white">
                            <div className="absolute inset-0 bg-secondary/10 group-hover:scale-110 transition-transform duration-500">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>

                            {/* Badges */}
                            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                                <span className="font-heading text-sm text-ink/40 bg-white/80 px-2 py-1 rounded-md uppercase tracking-widest border-2 border-ink">{product.category}</span>
                            </div>

                            {product.tags.includes('bestSeller') && (
                                <div className="absolute top-4 right-4 bg-accent border-2 border-ink px-2 py-1 font-heading text-sm rounded-lg rotate-12 shadow-hard-sm z-10">BEST!</div>
                            )}
                        </div>

                        <div className="p-6 flex flex-col flex-grow bg-white">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-3xl leading-none">{product.name}</h3>
                                <span className="font-heading text-2xl text-primary">${product.price.toFixed(2)}</span>
                            </div>
                            <p className="font-body text-sm opacity-70 mb-6 flex-grow">{product.description}</p>

                            <button className="w-full bg-ink text-white font-heading text-xl py-3 rounded-xl border-3 border-ink shadow-hard-sm hover:-translate-y-1 hover:shadow-hard transition-all active:translate-y-0.5 active:shadow-none">
                                ADD TO POP!
                            </button>
                        </div>
                    </div>
                ))}
                {filteredProducts.length === 0 && (
                    <div className="col-span-full py-20 text-center space-y-4">
                        <h3 className="text-4xl text-ink/20 italic uppercase">Cravings not found...</h3>
                        <p className="font-body opacity-50">Try searching for something else!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
