const PageTitle: React.FC = ({ children }) => {
    return (
        <h1 className="py-10 text-4xl font-bold text-center underline uppercase transition-all duration-500 select-none xl:text-7xl decoration-react hover:decoration-gray-200 hover:text-react">
            {children}
        </h1>
    );
};

export default PageTitle;
