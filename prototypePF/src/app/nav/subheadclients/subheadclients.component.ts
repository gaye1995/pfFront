import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-subheadclients',
  templateUrl: './subheadclients.component.html',
  styleUrls: ['./subheadclients.component.scss']
})
export class SubheadclientsComponent implements OnInit {
  activeTab!: string;
  constructor() { }

  handleTabChange(tab: MatTabChangeEvent) {
    this.activeTab = tab.tab.ariaLabel;
  }
  ngOnInit(): void {
  }

}
