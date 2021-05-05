export interface BillInterface {
    billNum: string;
    id: string;
    status: string;
    clientId: string;
    enterpriseId: string;
    articles: BillArticleI[];
    currency?: string;
    taxe?: number;
    totalHT: number;
    totalTTC: number;
    deadline: string;
    amountPaid?: number;
    payementDate?: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface BillArticleI {
    articleId: string;
    quantity: number;
}

export interface EditBill {
    billNum: string;
    id: string;
    status?: string;
    clientId: string;
    enterpriseId: string;
    articles?: BillArticleI[];
    currency?: string;
    taxe?: number;
    totalHT?: number;
    totalTTC?: number;
    deadline: string;
    amountPaid?: number;
    payementDate?: Date;
    createdAt: Date;
    updatedAt: Date;
}