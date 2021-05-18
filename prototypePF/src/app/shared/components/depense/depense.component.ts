import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseService } from 'src/app/services/expense/expense.service';
import { UserService } from 'src/app/services/user/user.service';
import { ExpenseInterfaceJson } from 'src/interfaces/userExpenseInterface';

@Component({
  selector: 'app-depense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.scss']
})
export class DepenseComponent implements OnInit {
  id = '';
  expense: any;

  constructor(private router: Router, private expenseService : ExpenseService) { }

  ngOnInit(): void {
    this.initData();
  }
  initData() {
    this.expenseService.getExpense().subscribe({
      next: (data: { error: false, expense: ExpenseInterfaceJson }) => {
        this.expense = data.expense;
       },
        error: (error: any) => { console.log(error);}
    });
}
}
