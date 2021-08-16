import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  id: string | null = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private billService: BillService,
    private route: ActivatedRoute)
    { } 

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
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
  
  async createBill() {
    if (!this.billNum.trim() || !this.id || !this.deadline) {
      console.log('Données obligatoires manquantes');
    } else {
      const creationData: CreateBill = {
        status: 'Non payée',
        userId: this.id,
        entrepriseId: '60cdc2cfc8189d2314c24efb',
        billNum: this.billNum.trim(),
        deadline: new Date(this.deadline),
        services: [],
        totalHT: 0,
        totalTTC: 0,
      };
      console.log(creationData)
      this.authService.createFacture(creationData).subscribe({
        next: (data: { error: false, bill: BillInterface }) => {
          console.log("sucess")
          this.router.navigate(['/comptables/'+this.id ])
          },
        error: (error: any) => { console.log(error); }
      });
    }
  }
}
