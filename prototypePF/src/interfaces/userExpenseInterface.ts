export interface ExpenseInterface {
    expenseNum: string;
    _id?: string;
    price: number;
    accountNumber: number;
    category: string;
    file: string;
    description: string;
    userId: string;
    projectId?: string;
    billable: boolean;
    createdAt: Date;
    updatedAt: Date;
}


export interface ExpenseInterfaceJson {
    expenseNum: string;
    id: string;
    price: number;
    accountNumber: number;
    category: string;
    file: string;
    description: string;
    userId: string;
    projectId?: string;
    billable: boolean;
    createdAt: Date | string;
    updatedAt: Date | string;
}