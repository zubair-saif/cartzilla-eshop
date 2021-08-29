export interface Product {
    id: number;
    title: string;
    category: string;
    image: string;
    price: number;
    description: string;
}

export interface ITotal {
    total: number;
    subTotal: number;
    shipping: number;
}