import clsx from 'clsx';
import { Student } from '../../types';

type StudentTableProps = {
    students: Student[];
};

const ResultStudent: React.FC<{ result: number | null }> = ({ result }) => {
    if (result === null) {
        return <td className="py-4 pl-3 pr-4 text-sm text-right text-gray-500 sm:pr-6 md:pr-0">N/A</td>;
    }
    return (
        <td
            className={clsx('py-4 pl-3 pr-4 text-sm text-right sm:pr-6 md:pr-0', {
                'text-red-600': result < 10,
                'text-green-600': result > 10,
                'text-yellow-600': result === 10,
            })}
        >
            {result}
        </td>
    );
};

const RowTable: React.FC<Student> = ({ lastname, firstname, result }) => {
    return (
        <tr className="border-b border-gray-400">
            <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                <div className="font-medium text-gray-100">{lastname}</div>
            </td>
            <td className="hidden px-3 py-4 text-sm text-left text-gray-400 sm:table-cell">{firstname}</td>
            <ResultStudent result={result} />
        </tr>
    );
};

const StudentTable: React.FC<StudentTableProps> = ({ students }) => {
    return (
        <>
            <h1 className="py-10 font-bold text-center underline uppercase transition-all duration-500 select-none text-7xl decoration-react hover:decoration-gray-200 hover:text-react">
                Students Tables
            </h1>
            <table className="min-w-full divide-y divide-gray-300">
                <thead>
                    <tr>
                        <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-50 sm:pl-6 md:pl-0 sm:table-cell"
                        >
                            Last Name
                        </th>
                        <th
                            scope="col"
                            className="hidden py-3.5 px-3 text-left text-sm font-semibold text-gray-50 sm:table-cell"
                        >
                            First Name
                        </th>
                        <th
                            scope="col"
                            className="py-3.5 px-3 text-right text-sm font-semibold text-gray-50 sm:table-cell"
                        >
                            Result
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <RowTable key={student.id} {...student} />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default StudentTable;
