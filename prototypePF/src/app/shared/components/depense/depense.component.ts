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
}
