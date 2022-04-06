import StudentTable from '../components/StudentTable';
import BaseLayout from '../Layouts/BaseLayout';
import students from './../data/students.json';

const Students = () => {
    return (
        <BaseLayout>
            <h1 className="py-10 font-bold text-center underline uppercase transition-all duration-500 select-none text-7xl decoration-react hover:decoration-gray-200 hover:text-react">
                Students Tables
            </h1>
            <StudentTable students={students} />
        </BaseLayout>
    );
};

export default Students;
