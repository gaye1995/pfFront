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
  bigChart ={};
  pieChart ={};
  cards :any;

 
 
  public categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(private DashbordService: DashbordService,private router: Router) { }

  ngOnInit(): void {
    this.bigChart = this.DashbordService.bigChart();
    this.cards = this.DashbordService.cards();
    this.pieChart = this.DashbordService.pieChart();

 
  }
  navTo(path:string) {
    this.router.navigate([path]);
  }
}

// public chartOptions = {
//   title: {
//     text: "Gross domestic product growth /GDP annual %/"
//   },
//   legend: {
//     position: "bottom"
//   },
//   seriesDefaults: {
//     type: "area",
//     area: {
//       line: {
//         style: "smooth"
//       }
//    }
//   },
//   series: [{
//     name: "India",
//     data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
//   }, {
//     name: "World",
//     data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
//   }, {
//     name: "Haiti",
//     data: [-0.253, 0.362, -3.519, 1.799, 2.252, 3.343, 0.843, 2.877, -5.416, 5.590]
//   }],
//   valueAxis: {
//     labels: {
//     format: "{0}%"
//    },
//    line: {
//      visible: false
//    },
//    axisCrossingValue: -10
//   },
//   categoryAxis: {
//     categories: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011],
//     majorGridLines: {
//       visible: false
//     },
//     labels: {
//       rotation: "auto"
//     }
//   },
//   tooltip: {
//     visible: true,
//     format: "{0}%"
//   }
// }
// public series: any[] = [{
//   name: 'India',
//   data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
// }, {
//   name: 'Russian Federation',
//   data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3]
// }, {
//   name: 'Germany',
//   data: [0.010, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.690, 2.995]
// }, {
//   name: 'World',
//   data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
// }];