import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './areacompte.component.html',
  styleUrls: ['./areacompte.component.css']
})
export class AreacompteComponent implements OnInit {
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
        text: 'Paiement annuelle'
      },
      subtitle: {
        text: 'Clients'
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
