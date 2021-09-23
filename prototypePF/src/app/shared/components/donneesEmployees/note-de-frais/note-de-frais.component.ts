import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserExpenseService } from 'src/app/services/userExpense/user-expense.service';
import { ExpenseInterfaceJson } from 'src/interfaces/userExpenseInterface';

@Component({
  selector: 'app-note-de-frais',
  templateUrl: './note-de-frais.component.html',
  styleUrls: ['./note-de-frais.component.scss']
})
export class NoteDeFraisComponent implements OnInit {
  id: string | null = '';
  userexpense: any ;
  constructor(
    private router: Router,
    private userExpenseService: UserExpenseService,
    private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) { this.initData();
    }

  }
  initData() {
    this.userExpenseService.getUserExpense(this.id).subscribe({
      next: (data: { error: false, userexpense: ExpenseInterfaceJson }) => {
        this.userexpense = data.userexpense;
      },
      error: (error: any) => { console.log(error); }
    });

  }

  navTo(path: string) {
    this.router.navigate([path]);
  }
}