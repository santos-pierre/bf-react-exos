import { FormEvent, useState } from 'react';

const Calculator = () => {
    const [numberLeft, setNumberLeft] = useState<number>(0);
    const [numberRight, setNumberRight] = useState<number>(0);
    const [operation, setOperation] = useState<string>('+');
    const [result, setResult] = useState<number | null>(null);

    const operations = [
        {
            id: 'plus-operation',
            value: '+',
        },
        {
            id: 'minus-operation',
            value: '-',
        },
        {
            id: 'divide-operation',
            value: '/',
        },
        {
            id: 'mult-operation',
            value: '*',
        },
    ];

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(eval('3+5/2'));
    };

    return (
        <form onSubmit={handleSubmit} className="flex">
            <input
                type="text"
                defaultValue={numberLeft}
                className="bg-transparent border-2 border-transparent border-b-react focus:outline-none"
            />
            <select
                name="operation"
                className="block w-full py-2 pl-3 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-react focus:border-react sm:text-sm"
                defaultValue={operation}
            >
                {operations.map((operation) => {
                    return (
                        <option value={operation.value} key={operation.id}>
                            {operation.value}
                        </option>
                    );
                })}
            </select>
            <input type="text" defaultValue={numberRight} />
            <button>Submit</button>
        </form>
    );
};

export default Calculator;
