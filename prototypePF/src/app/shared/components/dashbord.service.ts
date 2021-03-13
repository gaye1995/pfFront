import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashbordService {

  constructor() { }
  bigChart() {
    return [{
      name: 'Revenus',
      data: [502, 635, 809, 947, 1200, 1400, 1600,1630, 2003, 2706, 3000, 5470]
    }, {
      name: 'Dépenses',
      data: [106, 107, 111, 133, 221,163, 203, 276, 408, 547, 729, 628]
    
       }
  ];}

  cards() {
    return [45, 245];
  }

  pieChart() {
    return [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }];
  }
}
