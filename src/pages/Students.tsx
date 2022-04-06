import StudentTable from '../components/StudentTable';
import PageTitle from '../components/ui/Title/PageTitle';
import BaseLayout from '../Layouts/BaseLayout';
import students from './../data/students.json';

const Students = () => {
    return (
        <BaseLayout>
            <PageTitle>Students Tables</PageTitle>
            <StudentTable students={students} />
        </BaseLayout>
    );
};

export default Students;
