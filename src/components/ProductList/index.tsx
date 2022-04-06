import { StarIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { Product } from '../../types';

type ProductListProps = {
    products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="grid grid-cols-2 -mx-px border-t border-l border-gray-500 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => {
                const price = product.price.toLocaleString('Be-fr', {
                    currency: 'eur',
                    maximumFractionDigits: 2,
                });

                return (
                    <div
                        key={product.id}
                        className="relative p-4 transition duration-300 border-b border-r border-gray-500 cursor-pointer group sm:p-6 hover:bg-react"
                    >
                        <div className="pt-10 pb-4 text-center">
                            <h3 className="text-sm font-bold text-gray-200 group-hover:text-gray-800">
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.name}
                            </h3>
                            <div className="flex flex-col items-center mt-3 ">
                                <p className="sr-only">{product.rating} out of 5 stars</p>
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={clsx(
                                                product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                                'flex-shrink-0 h-5 w-5'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="mt-1 text-sm text-gray-500 group-hover:text-gray-800">
                                    {product.countReview} reviews
                                </p>
                            </div>
                            <p className="mt-4 text-base font-medium text-gray-200 group-hover:text-gray-800">
                                {price} €
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductList;
