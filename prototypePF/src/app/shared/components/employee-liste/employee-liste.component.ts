import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { EmployeeInterfaceJson } from 'src/interfaces/employeeInterface';

@Component({
  selector: 'app-employee-liste',
  templateUrl: './employee-liste.component.html',
  styleUrls: ['./employee-liste.component.scss']
})
export class EmployeeListeComponent implements OnInit {
  id :string | null= '';
  employee: any;
  oneEmployee: any;
  constructor(private router: Router,private route: ActivatedRoute, private userService : UserService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) { this.initData(); }
    this.initData();
   }
  initData() {
    this.userService.getEmployees().subscribe({
      next: (data: { error: false, employées: EmployeeInterfaceJson }) => {
        this.employee = data.employées;
        this.userService.getOneEmployee(this.employee.Id as string).subscribe({
          next: async (data2: { error: false, employe: EmployeeInterfaceJson }) => {
            this.oneEmployee = data2.employe;
          }
       });
      },
        error: (error: any) => { console.log(error);}
    });
  }
  navTo(path:string) {
    this.router.navigate([path]);
}
}
