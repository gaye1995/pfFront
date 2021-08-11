import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { UsersInterfaceJson } from 'src/interfaces/userInterface';


@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit {
  user : any;
  // dataSource = new MatTableDataSource(Us);

  @ViewChild(MatSort) sort: any;

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
  }
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.initData();
  }
  initData() {
    this.userService.getUsers().subscribe({
      next: (data: { error: false, user: UsersInterfaceJson }) => {
        this.user = data.user;
       },
        error: (error: any) => { console.log(error);}
    });

  }
  navTo(path:string) {
    this.router.navigate([path]);
}

}







