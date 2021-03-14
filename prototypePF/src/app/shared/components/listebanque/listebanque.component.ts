import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  symbol1: string;
  symbol2: string;
  symbol3: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Banque', weight: "Bnp", symbol: 'FR76 XXXXXXXXXX',symbol1: "512",symbol2: "512 Banque",symbol3: "compte actif"},
];
@Component({
  selector: 'app-listebanque',
  templateUrl: './listebanque.component.html',
  styleUrls: ['./listebanque.component.scss']
})
export class ListebanqueComponent implements OnInit {

 

  constructor(private router: Router) { }
 
  displayedColumns: string[] = [ 'name', 'weight', 'symbol', 'symbol1', 'symbol2', 'symbol3'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }
  navTo(path:string) {
    this.router.navigate([path]);
}

}

