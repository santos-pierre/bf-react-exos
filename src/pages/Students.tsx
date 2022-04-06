import StudentTable from '../components/StudentTable';
import BaseLayout from '../Layouts/BaseLayout';
import students from './../data/students.json';

const Students = () => {
    return (
        <BaseLayout>
            <StudentTable students={students} />
        </BaseLayout>
    );
};

export default Students;
