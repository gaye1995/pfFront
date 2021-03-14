import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compta',
  templateUrl: './compta.component.html',
  styleUrls: ['./compta.component.scss']
})
export class ComptaComponent implements OnInit {
  public categories: string[] = ['janv', "fev", "mar", 'avr', 'mai', 'jui', 'juil', 'aou', 'sep', 'oct', 'nov', 'dec'];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navTo(path:string) {
    this.router.navigate([path]);
  }

public chartOptions = {
  title: {
    text: "Gross domestic product growth /GDP annual %/"
  },
  legend: {
    position: "bottom"
  },
  seriesDefaults: {
    type: "area",
    area: {
      line: {
        style: "smooth"
      }
   }
  },
  series: [{
    name: "paiement client",
    data: [11.000, 13.000, 15.000,0, ,0 ,0, 0, 0, 0, 0, 0, 0 ]
  }, {
    name: "reste à payer",
    data: [10.000, 12.000,14.500 ,0, ,0 ,0, 0, 0, 0, 0, 0, 0 ]
  }, {
    name: "dépense",
    data: [1.000, 1.500,2.500 ,0, ,0 ,0, 0, 0, 0, 0, 0, 0 ]
  }],
  valueAxis: {
    labels: {
    format: "{0}%"
   },
   line: {
     visible: false
   },
   axisCrossingValue: 0
  },
  categoryAxis: {
    categories: ['janv', "fev", "mar", 'avr', 'mai', 'jui', 'juil', 'aou', 'sep', 'oct', 'nov', 'dec'],
    majorGridLines: {
      visible: false
    },
    labels: {
      rotation: "auto"
    }
  },
  tooltip: {
    visible: true,
    format: "{0}%"
  }
}
public series: any[] = [{
  name: "paiement client",
  data: [11.000, 13.000, 15.000,0, ,0 ,0, 0, 0, 0, 0, 0, 0 ]
}, {
  name: "reste à payer",
  data: [10.000, 12.000,14.500 ,0, ,0 ,0, 0, 0, 0, 0, 0, 0 ]
}, {
  name: "dépense",
  data: [1.000, 1.500,2.500 ,0, ,0 ,0, 0, 0, 0, 0, 0, 0 ]
}];
}
