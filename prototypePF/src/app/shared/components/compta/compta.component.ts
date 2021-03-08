import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compta',
  templateUrl: './compta.component.html',
  styleUrls: ['./compta.component.scss']
})
export class ComptaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navTo(path:string) {
    this.router.navigate([path]);
  }

}
