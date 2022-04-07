import PageTitle from '../components/ui/Title/PageTitle';
import BaseLayout from '../Layouts/BaseLayout';

import Calculator from '../components/Calculator';

const CalculatorPage = () => {
    return (
        <BaseLayout>
            <PageTitle>Calculator</PageTitle>
            <Calculator />
        </BaseLayout>
    );
};

export default CalculatorPage;
