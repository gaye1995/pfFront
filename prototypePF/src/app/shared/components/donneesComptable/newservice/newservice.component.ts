import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BillService } from 'src/app/services/bill/bill.service';
import { UserService } from 'src/app/services/user/user.service';
import { CreateBill } from 'src/interfaces/BillComptambleInterface';
import { BillInterface } from 'src/interfaces/billInterface';
import { CreateService } from 'src/interfaces/ServiceComptableInterface';
import { ServiceInterface } from 'src/interfaces/serviceInterface';
import {  UsersInterfaceJson } from 'src/interfaces/userInterface';

@Component({
  selector: 'app-newservice',
  templateUrl: './newservice.component.html',
  styleUrls: ['./newservice.component.scss']
})
export class NewserviceComponent implements OnInit {
  name: any;
  price: any;
  description: any;
  nbheure: any;
  accountNumber: any;
  constructor(private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  async createService() {
    if (!this.name || !this.price || !this.nbheure) {
      console.log('Données obligatoires manquantes');
    } else {
      const creationData: CreateService = {
        name: this.name,
        price: this.price,
        accountNumber: 706,
        nbheure: this.nbheure,
        description: this.description,
       
      };
      console.log(creationData)
      this.authService.createService(creationData).subscribe({
        next: (data: { error: false, service: ServiceInterface }) => {
          console.log(data.service)
          console.log("sucess")
          this.router.navigate(['/liste_comptables' ])
          },
        error: (error: any) => { console.log(error); }
      });
    }
  }

}
