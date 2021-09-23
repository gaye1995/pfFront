export interface ServiceComptableInterface {
    id: string;
    name: string;
    price: number;
    nbheure: number;
    accountNumber: number;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface CreateService {
    name: string;
    price: number;
    nbheure: number;
    accountNumber: number;
    description?: string;
}

