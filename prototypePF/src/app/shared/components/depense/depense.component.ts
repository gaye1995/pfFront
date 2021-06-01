import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client/client.service';
import { ExpenseService } from 'src/app/services/expense/expense.service';
import { UserService } from 'src/app/services/user/user.service';
import { EmployeeInterfaceJson } from 'src/interfaces/employeeInterface';
import { ExpenseInterfaceJson } from 'src/interfaces/userExpenseInterface';

@Component({
  selector: 'app-depense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.scss']
})
export class DepenseComponent implements OnInit {
  id: string | null = '';
  expense: any;
  employee: any;

  constructor(private router: Router,
    private expenseService: ExpenseService,
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) { this.initData(); 
    console.log(this.id)}
    this.initData();
  }
  initData() {
    this.expenseService.getExpense().subscribe({
      next: (data: { error: false, Depense: ExpenseInterfaceJson }) => {
        this.expense = data.Depense;
        console.log(this.expense.userId);
        this.userService.getOneEmployee(this.expense.userId as string).subscribe({
          next: async (data2: { error: false, employée: EmployeeInterfaceJson }) => {
            this.employee = data2.employée;
          }
        });
      },
      error: (error: any) => { console.log(error); }
    });
  }
  // async initData() {
  //   const loading = await this.loadingController.create({ cssClass: 'loading-div', message: 'Récupération...' });
  //   await loading.present();
  //   this.billService.getOneBill(this.id).subscribe({
  //     next: (data: { error: false, bill: BillI }) => {
  //       data.bill.createdAt = formatDate(data.bill.createdAt, 'yyyy-MM-dd', 'fr-FR', 'Europe/France');
  //       data.bill.deadline = formatDate(data.bill.deadline, 'yyyy-MM-dd', 'fr-FR', 'Europe/France');
  //       this.bill = data.bill;
  //       this.userService.getUser(this.bill.clientId as string).subscribe({
  //         next: async (data2: { error: false, user: UserJsonI }) => {
  //           this.client = data2.user;
  //           await loading.dismiss();
  //         }
  //       });
  //     },
  //     error: async (error: HttpErrorResponse) => {
  //       await loading.dismiss();
  //       this.toasterService.presentErrorToast('Impossible de récupérer cette facture.', { error });
  //     }
  //   });
  // }
}
