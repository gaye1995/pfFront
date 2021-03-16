import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';

// Mes interfaces de donnéee
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  symbol1: string;
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
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',symbol1: "ze",symbol2: "ze"},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',symbol1: "ze",symbol2: "ze"},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',symbol1: "ze",symbol2: "ze"},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',symbol1: "ze",symbol2: "ze"},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',symbol1: "ze",symbol2: "ze"},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',symbol1: "ze",symbol2: "ze"},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',symbol1: "ze",symbol2: "ze"},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',symbol1: "ze",symbol2: "ze"},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',symbol1: "ze",symbol2: "ze"},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',symbol1: "ze",symbol2: "ze"},
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
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'symbol1', 'symbol2'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  dataSource1 = TREE_DATA;
  campaignOne: FormGroup;
  campaignTwo: FormGroup;


  constructor(private router: Router) {    
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16))
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19))
    }); 
  }

  ngOnInit(): void {
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  navTo(path:string) {
    this.router.navigate([path]);
}


}


