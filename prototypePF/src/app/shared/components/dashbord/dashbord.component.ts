import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Highcharts from 'highcharts';
import { DashbordService } from '../dashbord.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  //bigChart: any;
  bigChart = {};
  pieChart = {};
  cards: any;



  public categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(private DashbordService: DashbordService, private router: Router) { }

  ngOnInit(): void {
    this.bigChart = this.DashbordService.bigChart();
    this.cards = this.DashbordService.cards();
    this.pieChart = this.DashbordService.pieChart();


  }
  navTo(path: string) {
    this.router.navigate([path]);
  }
}
