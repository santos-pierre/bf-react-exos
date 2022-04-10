import { Listbox, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { nanoid } from 'nanoid';
import { ChangeEvent, Dispatch, FormEvent, Fragment, SetStateAction, useState } from 'react';
import { Todo } from '../../types';
import InputMaterial from '../ui/InputMaterial';

const priorities = ['low', 'normal', 'high'];

type TodoFormProps = {
    onAddTodo: (todo: Todo) => void;
};

type TodoError = {
    [key: string]: string;
};

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
    const [selectedPriority, setPriority] = useState<'low' | 'normal' | 'high'>('low');
    const [title, setTitle] = useState<string>('');
    const [error, setError] = useState<TodoError>({});
    const [description, setDescription] = useState<string>('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        //Reset error
        setError({});

        if (title.trim()) {
            const todo: Todo = {
                id: nanoid(),
                title: title.trim(),
                description,
                priority: selectedPriority,
                done: false,
            };
            onAddTodo(todo);
            setTitle('');
            setPriority('low');
            setDescription('');
        } else {
            setError({
                title: 'title required',
            });
        }
    };

    const handleRequiredField = (
        e: ChangeEvent<HTMLInputElement>,
        dispatch: Dispatch<SetStateAction<string>>,
        name: string
    ) => {
        if (e.target.value.length >= 1 && !e.target.value.trim()) {
            const error: TodoError = {};
            error[name] = `${name} is a required field.`;
            dispatch(e.target.value);
            setError(error);
        } else {
            setError({});
            dispatch(e.target.value[0] === ' ' ? e.target.value.trim() : e.target.value);
        }
    };

    return (
        <form onSubmit={handleSubmit} method="POST">
            <div className="space-y-10">
                <InputMaterial
                    name="Task Title"
                    label={`Task Title *`}
                    className={clsx(
                        'w-full bg-transparent  text-2xl',
                        {
                            'border-react/30 focus:border-react': !error.hasOwnProperty('title'),
                        },
                        {
                            'text-red-500 border-red-600/30 focus:border-red-600':
                                error.hasOwnProperty('title'),
                        }
                    )}
                    labelClassName={clsx({
                        'text-red-500': error.hasOwnProperty('title'),
                    })}
                    value={title}
                    onChange={(e) => handleRequiredField(e, setTitle, 'title')}
                    required
                />
                <div className="border-b border-react/30 focus-within:border-react">
                    <textarea
                        rows={1}
                        name="description"
                        id="description"
                        className="block w-full p-0 pb-2 bg-transparent border-b resize-none border-react/30 focus:border-react focus:outline-none sm:text-base"
                        placeholder="Add your description..."
                        value={description}
                        onChange={({ target }) => setDescription(target.value)}
                    />
                </div>
            </div>
            <div className="mt-5">
                <Listbox value={selectedPriority} onChange={setPriority}>
                    {({ open }) => (
                        <>
                            <div className="relative mt-1">
                                <Listbox.Button
                                    className={clsx(
                                        open ? 'border-b-react' : 'border-b-react/30',
                                        'relative w-full py-2 text-lg bg-transparent border-2 border-transparent shadow-sm cursor-pointer focus:outline-none text-left'
                                    )}
                                >
                                    {selectedPriority}
                                </Listbox.Button>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-sm bg-gray-700 shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none md:text-lg ">
                                        {priorities.map((priority) => (
                                            <Listbox.Option
                                                key={priority}
                                                className={({ active }) =>
                                                    clsx(
                                                        active ? 'text-white bg-react' : '',
                                                        'cursor-pointer select-none relative py-2'
                                                    )
                                                }
                                                value={priority}
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
                                                            {priority}
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
            </div>
            <button className="w-full px-5 py-2 mt-5 text-2xl transition-colors duration-300 ease-in-out bg-react hover:bg-react/80">
                Add Todo
            </button>
        </form>
    );
};

export default TodoForm;
