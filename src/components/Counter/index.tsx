import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import { useState } from 'react';

type CounterProps = {
    startCount?: number;
    countValue?: number;
};

const Counter: React.FC<CounterProps> = ({ startCount = 0, countValue = 1 }) => {
    const [count, setCount] = useState<number>(startCount);

    const handlePlus = () => {
        setCount((count) => count + countValue);
    };

    const handleMinus = () => {
        setCount((count) => count - countValue);
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
        <div className="min-h-[40rem] flex flex-col justify-center items-center space-y-8">
            <span className="text-6xl font-bold select-none md:text-7xl">{count}</span>
            <div className="flex space-x-4">
                <button
                    className="inline-flex items-center justify-center p-2 transition-colors duration-200 hover:bg-gray-300 hover:text-react cursor-help"
                    onClick={handlePlus}
                >
                    <PlusIcon className="md:w-10 md:h-10 h-7" />
                    <span className="text-4xl font-bold">{countValue}</span>
                </button>
                <button
                    className="inline-flex items-center justify-center p-2 transition-colors duration-200 hover:bg-gray-300 hover:text-react cursor-help"
                    onClick={handleMinus}
                >
                    <MinusIcon className="md:w-10 md:h-10 h-7" />
                    <span className="text-4xl font-bold ">{countValue}</span>
                </button>
            </div>
            {count !== 0 ? (
                <div>
                    <button
                        className="px-5 py-2 text-4xl transition-colors duration-300 ease-in-out cursor-not-allowed hover:bg-red-500"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                </div>
            ) : (
                <div>
                    <div className="px-5 py-2 text-4xl text-transparent select-none">Hidden</div>
                </div>
            )}
        </div>
    );
};

export default Counter;
