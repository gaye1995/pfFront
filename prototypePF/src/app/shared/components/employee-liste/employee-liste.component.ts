import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
import { Router } from '@angular/router';

// const TREE_DATA: FoodNode[] = [
//   {
//     name: 'Fruit',
//     children: [
//       {name: 'Apple'},
//       {name: 'Banana'},
//       {name: 'Fruit loops'},
//     ]
//   }, {
//     name: 'Vegetables',
//     children: [
//       {
//         name: 'Green',
//         children: [
//           {name: 'Broccoli'},
//           {name: 'Brussels sprouts'},
//         ]
//       }, {
//         name: 'Orange',
//         children: [
//           {name: 'Pumpkins'},
//           {name: 'Carrots'},
//         ]
//       },
//     ]
//   },
// ];
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
@Component({
  selector: 'app-employee-liste',
  templateUrl: './employee-liste.component.html',
  styleUrls: ['./employee-liste.component.scss']
})
export class EmployeeListeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'symbol1', 'symbol2', 'symbol3'];
  dataSource = ELEMENT_DATA;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navTo(path:string) {
    this.router.navigate([path]);
}
}
