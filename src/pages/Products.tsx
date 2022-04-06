import ProductList from '../components/ProductList';
import PageTitle from '../components/ui/Title/PageTitle';
import BaseLayout from '../Layouts/BaseLayout';

import products from '../data/products.json';

const Products = () => {
    return (
        <BaseLayout>
            <PageTitle>Product List</PageTitle>
            <ProductList products={products} />
        </BaseLayout>
    );
};

export default Products;
