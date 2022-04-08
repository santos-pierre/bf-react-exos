import { LogoutIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const BaseLayout: React.FC = ({ children }) => {
    const { pathname } = useLocation();

    return (
        <div className="min-h-full text-gray-200 bg-gray-800 font-body">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <main className="max-w-5xl mx-auto">{children}</main>
            </div>
            <footer className="fixed bottom-0 w-full">
                {pathname !== '/' && (
                    <div className="flex justify-center mx-auto my-5">
                        <Link to={'/'}>
                            <div className="inline-flex items-center group">
                                <LogoutIcon className="w-8 h-8 transition-all duration-500 transform rotate-180 text-react group-hover:text-white" />
                                <span className="text-2xl font-bold underline transition-all duration-500 group-hover:text-react">
                                    Go Back
                                </span>
                            </div>
                        </Link>
                    </div>
                )}
            </footer>
        </div>
    );
};

export default BaseLayout;
