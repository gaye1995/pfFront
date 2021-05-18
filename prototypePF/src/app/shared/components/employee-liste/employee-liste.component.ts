import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { EmployeeInterfaceJson } from 'src/interfaces/employeeInterface';

@Component({
  selector: 'app-employee-liste',
  templateUrl: './employee-liste.component.html',
  styleUrls: ['./employee-liste.component.scss']
})
export class EmployeeListeComponent implements OnInit {
  id = '';
  employee: any;
  constructor(private router: Router, private userService : UserService) { }

  ngOnInit(): void {
    this.initData();
  }
  initData() {
    this.userService.getEmployees().subscribe({
      next: (data: { error: false, employées: EmployeeInterfaceJson }) => {
        this.employee = data.employées;
       },
        error: (error: any) => { console.log(error);}
    });

  }
  navTo(path:string) {
    this.router.navigate([path]);
}
}
