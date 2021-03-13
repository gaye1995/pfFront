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

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  symbol1: string;
  symbol2: string;
  symbol3: string;
  symbol4: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Mboup Gaye', weight: "15 rue de l'arche", symbol: 'paris',symbol1: "75009",symbol2: "XXXXXX@gmail.com",symbol3: "salarié",symbol4: "za"},
  {position: 2, name: 'Mboup Gaye', weight: "15 rue de l'arche", symbol: 'paris',symbol1: "75009",symbol2: "XXXXXX@gmail.com",symbol3: "salarié",symbol4: "za"},
  {position: 3, name: 'Mboup Gaye', weight: "15 rue de l'arche", symbol: 'paris',symbol1: "75009",symbol2: "XXXXXX@gmail.com",symbol3: "salarié",symbol4: "za"},
  {position: 4, name: 'Mboup Gaye', weight: "15 rue de l'arche", symbol: 'paris',symbol1: "75009",symbol2: "XXXXXX@gmail.com",symbol3: "salarié",symbol4: "za"},
  {position: 5, name: 'Mboup Gaye', weight: "15 rue de l'arche", symbol: 'paris',symbol1: "75009",symbol2: "XXXXXX@gmail.com",symbol3: "salarié",symbol4: "za"},
  {position: 6, name: 'Mboup Gaye', weight: "15 rue de l'arche", symbol: 'paris',symbol1: "75009",symbol2: "XXXXXX@gmail.com",symbol3: "salarié",symbol4: "za"},
  {position: 7, name: 'Mboup Gaye', weight: "15 rue de l'arche", symbol: 'paris',symbol1: "75009",symbol2: "XXXXXX@gmail.com",symbol3: "salarié",symbol4: "za"},
  {position: 8, name: 'Mboup Gaye', weight: "15 rue de l'arche", symbol: 'paris',symbol1: "75009",symbol2: "XXXXXX@gmail.com",symbol3: "salarié",symbol4: "za"},
  {position: 9, name: 'Mboup Gaye', weight: "15 rue de l'arche", symbol: 'paris',symbol1: "75009",symbol2: "XXXXXX@gmail.com",symbol3: "salarié",symbol4: "za"},
  {position: 10, name: 'Mboup Gaye', weight:"15 rue de l'arche", symbol: 'paris',symbol1: "75009",symbol2: "XXXXXX@gmail.com",symbol3: "salarié",symbol4: "za"},
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
