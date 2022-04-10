import clsx from 'clsx';

type TodoFiltersProps = {
    filter: 'all' | 'high' | 'normal' | 'low';
    onSetFilter: (filter: 'all' | 'high' | 'normal' | 'low') => void;
};

const TodoFilters: React.FC<TodoFiltersProps> = ({ filter, onSetFilter }) => {
    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-y-2">
            <div
                className={clsx(
                    {
                        'bg-gray-700/30 hover:bg-gray-700 hover:text-gray-300 hover:bg-gray-700/30':
                            filter === 'low',
                    },
                    'transition-colors duration-200 ease-in-out py-3 text-lg font-bold text-center text-gray-500 uppercase border-b-2 border-gray-600 cursor-pointer hover:bg-gray-900/30'
                )}
                onClick={() => onSetFilter('low')}
            >
                Low
            </div>
            <div
                className={clsx(
                    {
                        'bg-cyan-700/30 hover:bg-cyan-700 hover:text-cyan-300 hover:bg-gray-700/30':
                            filter === 'normal',
                    },
                    'transition-colors duration-200 ease-in-out py-3 text-lg font-bold text-center text-cyan-600 uppercase border-b-2 border-cyan-600 cursor-pointer hover:bg-cyan-900/30'
                )}
                onClick={() => onSetFilter('normal')}
            >
                Normal
            </div>
            <div
                className={clsx(
                    {
                        'bg-red-700/30 hover:bg-red-700 hover:text-red-300 hover:bg-gray-700/30':
                            filter === 'high',
                    },
                    'transition-colors duration-200 ease-in-out py-3 text-lg font-bold text-center text-red-600 uppercase border-b-2 border-red-600 cursor-pointer hover:bg-red-900/30'
                )}
                onClick={() => onSetFilter('high')}
            >
                High
            </div>
            <div
                className={clsx(
                    {
                        'bg-green-700/30 hover:bg-green-700 hover:text-green-300 hover:bg-gray-700/30':
                            filter === 'all',
                    },
                    'transition-colors duration-200 ease-in-out col-span-3 py-3 text-lg font-bold text-center text-green-600 uppercase border-b-2 border-green-600 cursor-pointer hover:bg-green-900/30'
                )}
                onClick={() => onSetFilter('all')}
            >
                All
            </div>
        </div>
    );
};

export default TodoFilters;
