
export interface BilanInterface {
    id: string;
    actif: {
        immobilisation?: Array<Object>,
        creance?: Array<Object>
    };
    passif: Object;
    dateBilan: Date;
}
export interface ActifInterface {
    immobilisation?: ActifArticleInterface[];
    totalI?: Number;
    creance?:  ActifBillInterface[];
    totalII?: Number;
    disponibilite?: [];
    totalIII?: Number;
    totalActif?: number;
}
export interface createActif {
    immobilisation?: ActifArticleInterface[];
    totalI?: Number;
    creance?:  ActifBillInterface[];
    totalII?: Number;
    disponibilite?: ActifBanqueInterface[];
    totalIII?: Number;
    totalActif?: number;
    actifDate: Date;

}
export interface ActifInterfaceJson {
    immobilisation?: ActifArticleInterface[];
    totalI?: Number;
    creance?:  ActifBillInterface[];
    totalII?: Number;
    disponibilite?: ActifBanqueInterface[];
    totalIII?: Number;
    totalActif?: number;
    actifDate: Date;
}
export interface EditActif {
    immobilisation?: ActifArticleInterface[];
    creance?:  ActifBillInterface[];
    disponibilite?: ActifBanqueInterface[];
    totalActif?: number;
    actifDateDebut?: Date;
    actifDateFin?: Date;

}
export interface ActifArticleInterface {
    articleId: string;
    quantity: number;
}
export interface ActifBillInterface {
    billId: string;
}
export interface ActifBanqueInterface {
    banqueId: string;
}
export interface PassifInterface {
    capitauxPropres?: Array<Object>,
    dettes?: Array<Object>,
    totalPassif?: number;
}
export interface createPassif {
    capitauxPropres?: Array<Object>,
    dettes?: Array<Object>,
    totalPassif?: number;
}
export interface PassifExpenseInterface {
    userExpenseNum: string;
}
export interface ChargeInterface {
    _id: string;
    exploitation?:  PassifExpenseInterface[];
    totalTTC?: number;
}
export interface ProduitInterface {
    _id: string;
    articleId: string,
    totalPassif: number;
    passifDateDebut: Date;
    passifDateFin: Date;
}