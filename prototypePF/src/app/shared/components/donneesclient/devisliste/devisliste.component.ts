import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devisliste',
  templateUrl: './devisliste.component.html',
  styleUrls: ['./devisliste.component.scss']
})
export class DevislisteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navTo(path:string) {
    this.router.navigate([path]);
}
}
