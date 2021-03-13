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
  symbol4: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Mboup Gaye', weight: "15 rue de l'arche", symbol: 'paris',symbol1: "75009",symbol2: "XXXXXX@gmail.com",symbol3: "salarié",symbol4: "za"},
];
@Component({
  selector: 'app-listebanque',
  templateUrl: './listebanque.component.html',
  styleUrls: ['./listebanque.component.scss']
})
export class ListebanqueComponent implements OnInit {

 

  constructor(private router: Router) { }
 
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'symbol1', 'symbol2', 'symbol3'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }
  navTo(path:string) {
    this.router.navigate([path]);
}

}

