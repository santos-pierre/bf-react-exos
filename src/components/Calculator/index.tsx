import { Listbox, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { ChangeEvent, Dispatch, FormEvent, Fragment, SetStateAction, useState } from 'react';

type Operator = {
    id: string;
    value: '+' | '-' | '/' | '*';
    display: string;
};

const Calculator = () => {
    const operators: Operator[] = [
        {
            id: 'plus-operator',
            value: '+',
            display: '+',
        },
        {
            id: 'minus-operator',
            value: '-',
            display: '-',
        },
        {
            id: 'divide-operator',
            value: '/',
            display: '/',
        },
        {
            id: 'mult-operator',
            value: '*',
            display: 'x',
        },
    ];

    const [numberLeft, setNumberLeft] = useState<string>('');
    const [numberRight, setNumberRight] = useState<string>('');
    const [operator, setOperator] = useState<Operator>(operators[0]);
    const [result, setResult] = useState<number | string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setResult(() => {
            const val1 = parseFloat(numberLeft);
            const val2 = parseFloat(numberRight);

            switch (operator.value) {
                case '+':
                    return val1 + val2;
                case '-':
                    return val1 - val2;
                case '*':
                    return val1 * val2;
                case '/':
                    if (val2 === 0) {
                        return 'Divide by 0 impossible.';
                    }
                    return val1 / val2;
                default:
                    return 'Does your operator exist ?';
            }
        });
    };

    const inputValueNumber = (
        e: ChangeEvent<HTMLInputElement>,
        dispatch: Dispatch<SetStateAction<string>>
    ) => {
        const onlyNumberRegex = /^[0-9]+(\.[0-9]*)?$/;
        let value = e.target.value.replace(',', '.');

        if (value.startsWith('.')) {
            value = '0' + value;
        }

        if (value === '' || onlyNumberRegex.test(value)) {
            dispatch(value);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-10">
            <form id="calculator-form" onSubmit={handleSubmit} className="flex space-x-4 text-xl">
                <input
                    type="text"
                    value={numberLeft}
                    onChange={(e) => inputValueNumber(e, setNumberLeft)}
                    className="w-32 bg-transparent border-2 border-transparent border-b-react/30 focus:border-b-react focus:outline-none"
                />
                <Listbox value={operator} onChange={setOperator}>
                    {({ open }) => (
                        <>
                            <div className="relative mt-1">
                                <Listbox.Button
                                    className={clsx(
                                        open ? 'border-b-react' : 'border-b-react/30',
                                        'relative w-full py-2 px-5 text-2xl bg-transparent border-2 border-transparent shadow-sm cursor-pointer focus:outline-none'
                                    )}
                                >
                                    <span className="block truncate">{operator.display}</span>
                                </Listbox.Button>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-sm bg-gray-700 shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none md:text-xl ">
                                        {operators.map((operator) => (
                                            <Listbox.Option
                                                key={operator.id}
                                                className={({ active }) =>
                                                    clsx(
                                                        active ? 'text-white bg-react' : '',
                                                        'cursor-pointer select-none relative py-2'
                                                    )
                                                }
                                                value={operator}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span
                                                            className={clsx(
                                                                selected ? 'font-semibold' : 'font-normal',
                                                                'block truncate text-center'
                                                            )}
                                                        >
                                                            {operator.display}
                                                        </span>
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </>
                    )}
                </Listbox>
                <input
                    type="text"
                    value={numberRight}
                    onChange={(e) => inputValueNumber(e, setNumberRight)}
                    className="w-32 bg-transparent border-2 border-transparent border-b-react/30 focus:border-b-react focus:outline-none"
                />
            </form>
            <button
                form="calculator-form"
                className="px-5 py-2 text-4xl transition-colors duration-300 ease-in-out hover:bg-react"
            >
                Calculate
            </button>
            <div>
                <h3 className="text-4xl font-bold">
                    Result : <span className="text-red-700">{result}</span>
                </h3>
            </div>
        </div>
    );
};

export default Calculator;
