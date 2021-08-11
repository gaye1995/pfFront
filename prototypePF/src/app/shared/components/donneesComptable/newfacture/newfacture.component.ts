import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BillService } from 'src/app/services/bill/bill.service';
import { UserService } from 'src/app/services/user/user.service';
import { BillComptableInterface, CreateBill } from 'src/interfaces/BillComptambleInterface';
import { BillInterface } from 'src/interfaces/billInterface';
import { ClientInterfaceJson, UsersInterfaceJson } from 'src/interfaces/userInterface';

@Component({
  selector: 'app-newfacture',
  templateUrl: './newfacture.component.html',
  styleUrls: ['./newfacture.component.scss']
})
export class NewfactureComponent implements OnInit {
  listUser: any;
  billNum = 'FAC000011';
  selectedUser = { name: '', selectedId: '' };
  deadline = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private billService: BillService)
    { } 

  ngOnInit(): void {
    this.initData();
  }
  initData() {
  this.userService.getUsers().subscribe({
    next: (data: { error: false, User: UsersInterfaceJson[] }) => {
      this.listUser = data.User;
    },
    error: (error: any) => { console.log(error);}
    });
  }
  filterCustomer(event?: any) {
    if (event) {
      this.selectedUser.selectedId = event.option.value;
      this.listUser.map((customer: { id: any; name: string; }) => {
        if (customer.id === event.option.value) { this.selectedUser.name = customer.name; }
      });
    } else {
      this.selectedUser.selectedId = '';
    }
  }
  async createBill() {
    if (!this.billNum.trim() || !this.selectedUser.selectedId || !this.deadline) {
      console.log('Données obligatoires manquantes');
    } else {

      const creationData: CreateBill = {
        billNum: this.billNum.trim(),
        userId: this.selectedUser.selectedId,
        enterpriseId: '606de2cd8522d42a44aa9a9b',
        status: 'Non payée',
        deadline: new Date(this.deadline),
        services: [],
        totalHT: 0,
        totalTTC: 0,
      };

      this.authService.createFacture(creationData).subscribe({
        next: async (data: { error: false, Bill: BillComptableInterface }) => {
          this.router.navigate(['/tabs/show-bill/', data.Bill.id]).then(() => {
            console.log('Création réussie');
          });
        },
      });
    }
  }
}
