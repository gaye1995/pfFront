import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BanqueService } from 'src/app/services/banque/banque.service';

@Component({
  selector: 'app-banque',
  templateUrl: './banque.component.html',
  styleUrls: ['./banque.component.scss']
})
export class BanqueComponent implements OnInit {
  name: string = '';
  libelle: string = '';
  city: string = '';
  country: string = '';
  address: string = '';
  zip: string = '';
  bic: string = '';
  iban: string = '';

  constructor(private router: Router, private banqueService: BanqueService) { }

  ngOnInit(): void {
  }
  createbanque(){
    if (this.libelle, this.name, this.iban ,this.bic , this.address ,this.zip, this.city, this.country) throw { code: 400 };
    this.banqueService.createbanque(this.libelle, this.name, this.iban ,this.bic , this.address ,this.zip, this.city, this.country).subscribe({
      next: () => { this.router.navigate(['/listebanque'])}, // Quand ca marche
      error: (error: any) => { console.log(error); }, // Quand ca marche pas
      complete: () => { }, // Quand il n'y aura plus aucun changement
    });
  }
}
