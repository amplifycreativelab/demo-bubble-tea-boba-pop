import { useState } from 'preact/hooks';
import { Plus, Minus, IceCream, Droplets, Coffee, Snowflake } from 'lucide-preact';

export default function DrinkBuilderIsland() {
    const [sweetness, setSweetness] = useState(50);
    const [ice, setIce] = useState('Regular');
    const [size, setSize] = useState('Large');
    const [toppings, setToppings] = useState<string[]>(['Brown Sugar Pearls']);

    const getSweetnessColor = (val: number) => {
        if (val < 25) return 'bg-green-400';
        if (val < 50) return 'bg-yellow-400';
        if (val < 75) return 'bg-orange-400';
        return 'bg-red-500';
    };

    const toggleTopping = (topping: string) => {
        setToppings(prev =>
            prev.includes(topping) ? prev.filter(t => t !== topping) : [...prev, topping]
        );
    };

    return (
        <div className="bg-white border-3 border-ink rounded-squircle p-8 shadow-hard grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-10">
                <div>
                    <h3 className="text-4xl mb-6 flex items-center gap-3">
                        <Droplets className="text-primary" /> SWEETNESS
                    </h3>
                    <div className="space-y-4">
                        <div className="flex justify-between font-heading text-xl">
                            <span>0% (HEALTHY)</span>
                            <span>100% (POP!)</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            step="25"
                            value={sweetness}
                            onInput={(e) => setSweetness(parseInt((e.target as HTMLInputElement).value))}
                            className={`w-full h-8 appearance-none border-3 border-ink rounded-xl cursor-pointer ${getSweetnessColor(sweetness)} transition-colors`}
                            style={{
                                accentColor: '#1A1A1B'
                            }}
                        />
                        <div className={`text-center font-heading text-4xl p-4 border-3 border-ink rounded-xl ${sweetness === 100 ? 'animate-bounce' : ''}`}>
                            {sweetness}% SWEET
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-4xl mb-6 flex items-center gap-3">
                        <Snowflake className="text-secondary" /> ICE LEVEL
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                        {['None', 'Half', 'Regular'].map(level => (
                            <button
                                key={level}
                                onClick={() => setIce(level)}
                                className={`py-3 font-heading text-xl border-3 border-ink rounded-xl transition-all ${ice === level ? 'bg-secondary shadow-hard-sm -translate-y-1' : 'bg-background hover:bg-white'
                                    }`}
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="space-y-10">
                <div>
                    <h3 className="text-4xl mb-6 flex items-center gap-3">
                        <IceCream className="text-accent" /> TOPPINGS
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                        {['Brown Sugar Pearls', 'Lychee Jelly', 'Popping Boba', 'Cloud Foam', 'Sago', 'Red Bean'].map(topping => (
                            <button
                                key={topping}
                                onClick={() => toggleTopping(topping)}
                                className={`flex items-center justify-between px-4 py-3 font-body border-3 border-ink rounded-xl transition-all ${toppings.includes(topping) ? 'bg-accent shadow-hard-sm -translate-y-1' : 'bg-background'
                                    }`}
                            >
                                {topping}
                                {toppings.includes(topping) && <Plus size={16} className="rotate-45" />}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="pt-6 border-t-3 border-ink border-dashed">
                    <div className="flex justify-between items-end mb-6">
                        <div className="space-y-1">
                            <p className="font-heading text-xl opacity-40 leading-none">YOUR MIX:</p>
                            <p className="font-body text-sm">{size} • {ice} Ice • {sweetness}% Sweet • {toppings.join(', ')}</p>
                        </div>
                        <div className="text-right">
                            <p className="font-heading text-4xl leading-none text-primary">$9.50</p>
                        </div>
                    </div>
                    <button className="w-full bg-primary border-3 border-ink rounded-xl py-4 font-heading text-2xl shadow-hard hover:-translate-y-1 active:translate-y-0.5 active:shadow-none transition-all pulse-focus">
                        ADD TO BASKET
                    </button>
                </div>
            </div>
        </div>
    );
}
