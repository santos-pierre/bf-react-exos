import { useState } from 'react';
import { Todo } from '../../types';
import TodoFilters from './TodoFilters';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const data: Todo[] = [];

const TodoList = () => {
    const [todoList, setTodoList] = useState<Todo[]>(data);
    const [filter, setFilter] = useState<'all' | 'high' | 'normal' | 'low'>('all');

    const addTodo = (todo: Todo) => {
        setTodoList([...todoList, todo]);
    };

    const removeTodo = (id: string) => {
        setTodoList(todoList.filter((todo) => todo.id !== id));
    };

    const doneTodo = (id: string) => {
        setTodoList(
            todoList.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, done: true };
                }
                return todo;
            })
        );
    };

    return (
        <>
            <TodoForm onAddTodo={addTodo} />
            <ul className="mt-5 space-y-3">
                <TodoFilters filter={filter} onSetFilter={setFilter} />
                {todoList
                    .filter((todo) => (filter === 'all' ? true : todo.priority === filter))
                    .map((todo: Todo) => {
                        return (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                onRemoveTodo={removeTodo}
                                onDoneTodo={doneTodo}
                            />
                        );
                    })}
                {todoList.length === 0 && (
                    <p className="pt-10 font-bold text-center uppercase">Todo List Empty</p>
                )}
            </ul>
            {todoList.length !== 0 && (
                <button
                    className="w-full px-5 py-2 mt-5 mb-5 text-2xl transition-colors duration-300 ease-in-out bg-red-500 hover:bg-red-700"
                    onClick={() => {
                        setTodoList(
                            todoList.filter((todo) =>
                                filter === 'all' ? false : todo.priority !== filter
                            )
                        );
                        setFilter('all');
                    }}
                >
                    Remove All
                </button>
            )}
        </>
    );
};

export default TodoList;
