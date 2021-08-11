import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-header-comptable',
  templateUrl: './header-comptable.component.html',
  styleUrls: ['./header-comptable.component.scss']
})
export class HeaderComptableComponent implements OnInit {
  activeTab!: string;

  constructor() { }
  handleTabChange(tab: MatTabChangeEvent) {
    this.activeTab = tab.tab.ariaLabel;
  }
  ngOnInit(): void {
  }

}
