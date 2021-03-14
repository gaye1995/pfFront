import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  identifiant: string;
  modifier: string;
  name: string;
  position: string;
  weight: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {modifier:'',identifiant:" xxxxx@gmail.com",position:'gaye', name: 'Hydrogen', weight: "L&K", symbol: "12-13-2021"},
  {modifier:'',identifiant:" xxxxx@gmail.com", position:'emilie', name: 'Hydrogen', weight: "L&K", symbol: "12-13-2021"},
];
@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit {
  displayedColumns: string[] = ['identifiant','position', 'name', 'weight', 'symbol','modifier'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: any;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  constructor() { }

  ngOnInit(): void {
  }

}







