export interface ArticleInterface {
    id: string;
    name: string;
    price: number;
    accountNumber: number;
    tva?: number;
    description?: string;
}

export interface ArticleCreateI {
    name: string;
    price: number;
    accountNumber: number;
    tva: number;
    description?: string;
}