import { Listbox, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment, useState } from 'react';
import InputMaterial from '../ui/InputMaterial';

const priorities = ['low', 'normal', 'high'];

const TodoForm = () => {
    const [priority, setPriority] = useState<string>(priorities[0]);

    return (
        <form>
            <div className="space-y-10">
                <InputMaterial
                    name="Task Title"
                    label="Task Title"
                    className="w-full bg-transparent border-react/30 focus:border-react"
                />
                <div className="border-b border-react/30 focus-within:border-react">
                    <textarea
                        rows={2}
                        name="description"
                        id="description"
                        className="block w-full p-0 pb-2 bg-transparent border-b resize-none border-react/30 focus:border-react focus:outline-none sm:text-sm"
                        placeholder="Add your description..."
                        defaultValue={''}
                    />
                </div>
            </div>
            <Listbox value={priority} onChange={setPriority}>
                {({ open }) => (
                    <>
                        <div className="relative mt-1">
                            <Listbox.Button
                                className={clsx(
                                    open ? 'border-b-react' : 'border-b-react/30',
                                    'relative w-full py-2 px-5 text-lg bg-transparent border-2 border-transparent shadow-sm cursor-pointer focus:outline-none'
                                )}
                            >
                                <span className="block truncate">{priority}</span>
                            </Listbox.Button>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-sm bg-gray-700 shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none md:text-lg ">
                                    {priorities.map((prio) => (
                                        <Listbox.Option
                                            key={prio}
                                            className={({ active }) =>
                                                clsx(
                                                    active ? 'text-white bg-react' : '',
                                                    'cursor-pointer select-none relative py-2'
                                                )
                                            }
                                            value={prio}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={clsx(
                                                            selected
                                                                ? 'font-semibold'
                                                                : 'font-normal',
                                                            'block truncate pl-3'
                                                        )}
                                                    >
                                                        {prio}
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
        </form>
    );
};

export default TodoForm;
