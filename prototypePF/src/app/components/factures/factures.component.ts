import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

// Mes interfaces de donnéee
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  symbol1: string;
  symbol2: string;
  symbol3: string;
  symbol4: string;

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
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',symbol1: "ze",symbol2: "ze",symbol3: "zjs",symbol4: "za"},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',symbol1: "ze",symbol2: "ze",symbol3: "zjs",symbol4: "za"},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',symbol1: "ze",symbol2: "ze",symbol3: "zjs",symbol4: "za"},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',symbol1: "ze",symbol2: "ze",symbol3: "zjs",symbol4: "za"},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',symbol1: "ze",symbol2: "ze",symbol3: "zjs",symbol4: "za"},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',symbol1: "ze",symbol2: "ze",symbol3: "zjs",symbol4: "za"},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',symbol1: "ze",symbol2: "ze",symbol3: "zjs",symbol4: "za"},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',symbol1: "ze",symbol2: "ze",symbol3: "zjs",symbol4: "za"},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',symbol1: "ze",symbol2: "ze",symbol3: "zjs",symbol4: "za"},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',symbol1: "ze",symbol2: "ze",symbol3: "zjs",symbol4: "za"},
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


  constructor() {     
  }

  ngOnInit(): void {
  }

}


