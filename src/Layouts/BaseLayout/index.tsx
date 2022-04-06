const BaseLayout: React.FC = ({ children }) => {
    return (
        <div className="min-h-full bg-gray-800 text-gray-200 font-body">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <main className="max-w-5xl mx-auto">{children}</main>
            </div>
        </div>
    );
};

export default BaseLayout;
