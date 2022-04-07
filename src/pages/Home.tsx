import { Link, NavLink } from 'react-router-dom';
import PageTitle from '../components/ui/Title/PageTitle';
import BaseLayout from '../Layouts/BaseLayout';

type Link = {
    name: string;
    url: string;
};

const links: Link[] = [
    {
        name: 'student list',
        url: '/students',
    },
    {
        name: 'product list',
        url: '/products',
    },
    {
        name: 'markdown editor',
        url: '/editor',
    },
];

const Home = () => {
    return (
        <BaseLayout>
            <PageTitle>BF Exercices Reacts</PageTitle>
            <div className="space-y-3">
                {links.map((link) => {
                    return (
                        <NavLink to={link.url} key={link.name} className="block">
                            <div className="relative bg-black cursor-pointer group">
                                <div className="px-5 py-3 transition-transform duration-200 border-2 border-black bg-react group-hover:-translate-x-1 group-hover:translate-y-1">
                                    <span className="text-4xl font-bold capitalize">{link.name}</span>
                                </div>
                                <div className="absolute inset-0 w-full h-full border-2 border-black -z-10 "></div>
                            </div>
                        </NavLink>
                    );
                })}
            </div>
        </BaseLayout>
    );
};

export default Home;
