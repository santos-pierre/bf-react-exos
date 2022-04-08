import TodoList from '../components/TodoList';
import PageTitle from '../components/ui/Title/PageTitle';
import BaseLayout from '../Layouts/BaseLayout';

const TodoListPage = () => {
    return (
        <BaseLayout>
            <PageTitle>Todo List</PageTitle>
            <div className="max-w-xl mx-auto">
                <TodoList />
            </div>
        </BaseLayout>
    );
};

export default TodoListPage;
