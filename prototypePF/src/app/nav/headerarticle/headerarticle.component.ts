import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-headerarticle',
  templateUrl: './headerarticle.component.html',
  styleUrls: ['./headerarticle.component.scss']
})
export class HeaderarticleComponent implements OnInit {
  activeTab!: string;

  
  constructor() { }
  handleTabChange(tab: MatTabChangeEvent) {
    this.activeTab = tab.tab.ariaLabel;
  }
  ngOnInit(): void {
  }

}
