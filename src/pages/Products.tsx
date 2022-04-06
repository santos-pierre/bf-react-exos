import ProductList from '../components/ProductList';
import BaseLayout from '../Layouts/BaseLayout';

import products from './../data/products.json';

const Products = () => {
    return (
        <BaseLayout>
            <h1 className="py-10 font-bold text-center underline uppercase transition-all duration-500 select-none text-7xl decoration-react hover:decoration-gray-200 hover:text-react">
                Products List
            </h1>
            <ProductList products={products} />
        </BaseLayout>
    );
};

export default Products;
