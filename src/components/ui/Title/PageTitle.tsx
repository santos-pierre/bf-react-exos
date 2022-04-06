const PageTitle: React.FC = ({ children }) => {
    return (
        <h1 className="py-10 font-bold text-center underline uppercase transition-all duration-500 select-none text-7xl decoration-react hover:decoration-gray-200 hover:text-react">
            {children}
        </h1>
    );
};

export default PageTitle;
