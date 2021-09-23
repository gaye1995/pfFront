import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from 'src/app/services/bill/bill.service';
import { BillInterface } from 'src/interfaces/billInterface';
import { HttpErrorResponse } from '@angular/common/http';
import 'hammerjs'
import { element } from 'protractor';
@Component({
  selector: 'app-compta',
  templateUrl: './compta.component.html',
  styleUrls: ['./compta.component.scss']
})
export class ComptaComponent implements OnInit {
  public categories: string[] = ['janv', "fev", "mar", 'avr', 'mai', 'jui', 'juil', 'aou', 'sep', 'oct', 'nov', 'dec'];
  id :string | null= '';
  bill: any = [];
  client: any;
  public series: any = [];
  public categorie: any = [];
  constructor(private router: Router,
    private route: ActivatedRoute,
    private billService: BillService) { }

  ngOnInit(): void {
    this.initData()
  }
 
  initData() {
    this.billService.getAllBill().subscribe({
      next: (data: { error: false, Bill: BillInterface }) => {
        this.bill = data.Bill;
        const dataLate: any[] = [];
        const dataUnpaid: any[] = [];
        const dataPaid: any[] = [];
        const dataR: any[] = [];
        const dataP: any[] = [];
        const dataU: any[] = [];
        let sommesE =0;
        let sommesP = 0;
        let sommesN = 0;
        this.bill.forEach((element: {status: string, totalTTC: any,deadline: Date, i: number ;})=> {
          if (element.status === 'En retard') {
            dataLate.push(element.totalTTC);
            sommesE = sommesE + element.totalTTC ;
            // dataR.push(element.deadline)
          }
          else if (element.status === 'Payée') {
            dataPaid.push(element.totalTTC);
            sommesP = sommesP + element.totalTTC
            // dataP.push(element.deadline)
          }
          else if (element.status === 'Non payée') {
            dataUnpaid.push(element.totalTTC);
            sommesN = sommesN + element.totalTTC
            // dataU.push(element.deadline)
          }
          this.categorie.push(element.deadline)
        });
        console.log(this.categorie);

        this.series.push({
          name: 'En retard',
          data: dataLate,
          somme: sommesE.toFixed(2),
        },{
          name: 'Non payée',
          data: dataUnpaid,
          somme:sommesN.toFixed(2)
        },{
          name: 'Payée',
          data: dataPaid,
          somme: sommesP.toFixed(2)
        })
      },
      error: async (error: HttpErrorResponse) => {
        return error;
      }
    });
  }
  navTo(path:string) {
    this.router.navigate([path]);
  }
// public series: any[] = [{
//   name: "paiement client",
//   data: this.bill,
// }, {
//   name: "reste à payer",
//   data: [10.000, 12.000,14.500 ,0, ,0 ,0, 0, 0, 0, 0, 0, 0 ]
// }, {
//   name: "dépense",
//   data: [1.000, 1.500,2.500 ,0, ,0 ,0, 0, 0, 0, 0, 0, 0 ]
// }];
}
