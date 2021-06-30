import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from 'src/app/services/bill/bill.service';
import { ClientService } from 'src/app/services/client/client.service';
import { ClientInterfaceJson } from 'src/interfaces/userInterface';

@Component({
  selector: 'app-coordonnees',
  templateUrl: './coordonnees.component.html',
  styleUrls: ['./coordonnees.component.scss']
})
export class CoordonneesComponent implements OnInit {
  id :string | null= '';
  client: any ;
  constructor(private router: Router, private clientService : ClientService, private billService :BillService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) { 
      this.initData(); 
   } 
   this.initData(); 
 }
  initData() {
  this.clientService.getOneCostomers(this.id).subscribe({
    next: (data: { error: false, Client: ClientInterfaceJson }) => {
      this.client = data.Client;
     },
      error: (error: any) => { console.log(error);}
  });
}
}
