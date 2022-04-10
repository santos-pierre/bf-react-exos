export type Student = {
    id: number;
    firstname: string;
    lastname: string;
    result: number | null;
};

export type Product = {
    id: number;
    name: string;
    price: number;
    promo: boolean;
    rating: number;
    countReview: number;
};

export type Todo = {
    id: string;
    title: string;
    description?: string;
    priority: 'low' | 'normal' | 'high';
    done: boolean;
};
