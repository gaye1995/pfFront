import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BanqueService } from 'src/app/services/banque/banque.service';
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

  public url = 'https://business-cloud-logiciel-api.herokuapp.com/'


  constructor(private router: Router, private banqueService: BanqueService,private http: HttpClient) { }
 
  displayedColumns: string[] = [ 'name', 'weight', 'symbol', 'symbol1', 'symbol2', 'symbol3'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }
  banques =  this.http.get<any[]>(this.url + `banque/all`);

  // getbanque(){
  //     const banque = this.banqueService.getbanque().subscribe({
  //       next: () => { console.log(banque)}, // Quand ca marche
  //       error: (error: any) => { console.log(error); }, // Quand ca marche pas
  //       complete: () => { }, // Quand il n'y aura plus aucun changement
  //     });
  //   }
  navTo(path:string) {
    this.router.navigate([path]);
}

}

