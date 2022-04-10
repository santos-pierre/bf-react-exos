import { TrashIcon, CheckCircleIcon, ExclamationIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import { Todo } from '../../types';

type TodoItemProps = {
    todo: Todo;
    onRemoveTodo: (id: string) => void;
    onDoneTodo: (id: string) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onRemoveTodo, onDoneTodo }) => {
    return (
        <li
            className={clsx(
                { 'border-gray-500': todo.priority === 'low' },
                { 'border-react': todo.priority === 'normal' },
                { 'border-red-500': todo.priority === 'high' },
                { 'hover:bg-gray-700/30': !todo.done },
                { 'todo-done': todo.done },
                'relative py-5 px-4 border'
            )}
        >
            <div className="flex justify-between space-x-3">
                <div className="flex min-w-0">
                    {todo.priority === 'high' && (
                        <ExclamationIcon className="w-5 h-5 mr-1 text-red-500" />
                    )}
                    <p className="text-sm font-medium truncate">{todo.title}</p>
                </div>
            </div>

            <div className="mt-5">
                {todo.description && <p className="text-sm line-clamp-2 ">{todo.description}</p>}
            </div>

            <div className="absolute space-y-2 top-2 right-2">
                <div className="cursor-pointer">
                    <TrashIcon
                        className="w-5 h-5 transition-colors duration-300 hover:text-red-600"
                        onClick={() => onRemoveTodo(todo.id)}
                    />
                </div>
                <div className={clsx({ 'cursor-pointer': !todo.done })}>
                    <CheckCircleIcon
                        className={clsx(
                            {
                                'text-green-600': todo.done,
                            },
                            'h-5 w-5 hover:text-green-600 transition-colors duration-300'
                        )}
                        onClick={() => (!todo.done ? onDoneTodo(todo.id) : null)}
                    />
                </div>
            </div>
        </li>
    );
};

export default TodoItem;
