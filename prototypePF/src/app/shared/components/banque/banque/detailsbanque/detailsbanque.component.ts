import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BanqueService } from 'src/app/services/banque/banque.service';

@Component({
  selector: 'app-detailsbanque',
  templateUrl: './detailsbanque.component.html',
  styleUrls: ['./detailsbanque.component.scss']
})
export class DetailsbanqueComponent implements OnInit {
  id: string = '';

  constructor(private banqueService: BanqueService,private router : Router) { }

  ngOnInit(): void {
  }
  getOneBanque(){ 
    this.banqueService.getOnebanque(this.id).subscribe({
      next: () => { }, // Quand ca marche
      error: (error: any) => { console.log(error); }, // Quand ca marche pas
      complete: () => { }, // Quand il n'y aura plus aucun changement
    });
  }

}
