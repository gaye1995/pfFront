import { ExpenseInterface } from './../../../../interfaces/userExpenseInterface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client/client.service';
import { ExpenseService } from 'src/app/services/expense/expense.service';
import { UserService } from 'src/app/services/user/user.service';
import { EmployeeInterfaceJson } from 'src/interfaces/employeeInterface';
// import { ExpenseInterface } from 'src/interfaces/userExpenseInterface';

@Component({
  selector: 'app-depense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.scss']
})
export class DepenseComponent implements OnInit {
  id: string | null = '';
  expense: any;
  employee: any;
  filtersearchE: any;
  filtersearchresultE : any;
  filterName = '0';
  searchValue = '';
  constructor(private router: Router,
    private expenseService: ExpenseService,
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) { this.initData(); 
    }
    this.initData();
  }
  initData() {
    this.expenseService.getExpense().subscribe({
      next: (data: { error: false, Depense: ExpenseInterface }) => {
        this.expense = data.Depense;
        this.filtersearchE = data.Depense;
        console.log(this.filtersearchE)
        this.search();
      },
      error: (error: any) => { console.log(error); }
    });
  }

  search(chaine?: any){
    if (chaine && chaine.value) { this.filterName = chaine.value; }

    this.filtersearchE = this.expense.filter((exp: { category: string; }) => {
      const searchProject = (): any => {
        if (exp.category.toLowerCase().includes(this.searchValue.toLowerCase())) {
          return true;
        } 
      }; 
      return searchProject();
  });
}
}
