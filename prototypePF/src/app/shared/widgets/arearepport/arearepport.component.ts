import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-arearepport',
  templateUrl: './arearepport.component.html',
  styleUrls: ['./arearepport.component.css']
})
export class ArearepportComponent implements OnInit {
  chartOptions: Highcharts.Options = { }; // required
  @Input() data: any = [];

 // Highcharts = Highcharts;
  Highcharts: typeof Highcharts = Highcharts; // required

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Bilan N'
      },
      subtitle: {
        text: ''
      },
      xAxis:{
        categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun",
           "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
     },
      tooltip: {
        split: true,
        valueSuffix: ' millions'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,
      },
      series: this.data
    };
    HC_exporting(Highcharts);

    // setTimeout(() => {
    //   window.dispatchEvent(
    //     new Event('resize')
    //   );
    // }, 300);

  }

}
