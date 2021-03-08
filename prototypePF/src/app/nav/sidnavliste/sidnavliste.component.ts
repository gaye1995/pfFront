import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidnavliste',
  templateUrl: './sidnavliste.component.html',
  styleUrls: ['./sidnavliste.component.scss']
})
export class SidnavlisteComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
