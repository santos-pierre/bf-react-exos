const BaseLayout: React.FC = ({ children }) => {
    return (
        <div className="min-h-full text-gray-200 bg-gray-800 font-body">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <main className="max-w-5xl mx-auto">{children}</main>
            </div>
        </div>
    );
};

export default BaseLayout;
