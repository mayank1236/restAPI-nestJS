import { Product } from './product.model';
export declare class ProductsService {
    private products;
    insertProduct(title: string, desc: string, price: number): string;
    getProducts(): Product[];
    getProduct(productId: string): {
        id: string;
        title: string;
        desc: string;
        price: number;
    };
    updateProduct(productId: string, title: string, desc: string, price: number): void;
    private findProduct;
    deleteProduct(prodId: string): void;
}
