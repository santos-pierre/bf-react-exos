import Counter from '../components/Counter';
import PageTitle from '../components/ui/Title/PageTitle';
import BaseLayout from '../Layouts/BaseLayout';

const CounterPage = () => {
    return (
        <BaseLayout>
            <PageTitle>Counter</PageTitle>
            <Counter startCount={5} countValue={2} />
        </BaseLayout>
    );
};

export default CounterPage;
