import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { Router } from '@angular/router';

// Mes interfaces de donnéee
export interface PeriodicElement {
  status: string;
  N_facture: string;
  Date_echeance: string;
  symbol: number;
  symbol1: number;
  symbol2: string;
}

interface DonneeFacture {
  name: string;
  children?: DonneeFacture[];
}
/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
//  Mes tableau de données
const ELEMENT_DATA: PeriodicElement[] = [
  {N_facture: 'Facture_45874e', status: 'fatima ly', Date_echeance: '6/15/15, 9:03 AM', symbol: 3409.34,symbol1: 3429.34,symbol2: "ze"},
  {N_facture: 'Facture_45874e', status: 'Helium ly', Date_echeance: '6/15/15, 9:03 AM', symbol: 3409.34,symbol1: 3429.34,symbol2: "ze"},
  {N_facture: 'Facture_45874e', status: 'Lithium ly', Date_echeance: '6/15/15, 9:03 AM', symbol: 3409.34,symbol1: 3429.34,symbol2: "ze"},
  {N_facture: 'Facture_45874e', status: 'Beryllium ly', Date_echeance: '6/15/15, 9:03 AM', symbol: 3409.34,symbol1: 3429.34,symbol2: "ze"},
  {N_facture: 'Facture_45874e', status: 'Boron ly', Date_echeance: '6/15/15, 9:03 AM', symbol: 3409.34,symbol1: 3429.34,symbol2: "ze",},
  {N_facture: 'Facture_45874e', status: 'Carbon ly', Date_echeance: '6/15/15, 9:03 AM', symbol: 3409.34,symbol1: 3429.34,symbol2: "ze",},
  {N_facture: 'Facture_45874e', status: 'Nitrogen ly', Date_echeance: '6/15/15, 9:03 AM', symbol: 3409.34,symbol1: 3429.34,symbol2: "ze"},
  {N_facture: 'Facture_45874e', status: 'Oxygen ly', Date_echeance: '6/15/15, 9:03 AM', symbol: 3409.34,symbol1: 3429.34,symbol2: "ze"},
  {N_facture: 'Facture_45874e', status: 'Fluorine ly', Date_echeance: '6/15/15, 9:03 AM', symbol: 3409.34,symbol1:3429.34,symbol2: "ze"},
  {N_facture: 'Facture_45874e', status: 'Neon ly', Date_echeance: '6/15/15, 9:03 AM', symbol: 3409.34,symbol1: 3429.34,symbol2: "ze"},
];


const TREE_DATA: DonneeFacture[] = [
  {
    name: 'Opérations principales',
    children: [
      {name: 'Facture client impressions / comptabilisation'},
      {name: 'Listes factures encaissées'},
      {name: 'Listes devis'},
    ]
  }, {
    name: 'Statistique',
    children: [
      {name: 'Total vente / mois'},
      {name: 'Vente /catégorie'},
      {name: 'Vente /produit'},
      {name: 'Vente /client'},

    ]
  },
  {
    name: 'Clients',
    children: [
      {name: 'Client'},
    ]
  },
];



@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.scss']
})
export class FacturesComponent implements OnInit {
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'symbol1', 'symbol2', 'symbol3'];
  dataSource = ELEMENT_DATA;
  dataSource1 = TREE_DATA;


  constructor(private router: Router) {     
  }

  ngOnInit(): void {
  }
  navTo(path:string) {
    this.router.navigate([path]);
}

}


