import { formatDate } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article/article.service';
import { BillService } from 'src/app/services/bill/bill.service';
import { ClientService } from 'src/app/services/client/client.service';
import { BillInterface } from 'src/interfaces/billInterface';


// Mes interfaces de donnéee


interface DonneeFacture {
  name: string;
  children?: DonneeFacture[];
}
/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
//  Mes tableau de donnée

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.scss']
})
export class FacturesComponent implements OnInit {
  id :string | null= '';
  bill: any;
  client: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private billService: BillService,
    private clientService: ClientService,
    private articleService: ArticleService) {    }
  

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
       this.initData();
  }
  this.initData()
}
initData() {
    this.billService.getBillbyClient(this.id).subscribe({
      next: (data: { error: false, Bill: BillInterface }) => {
        // data.Bill.createdAt = formatDate(data.Bill.createdAt, 'yyyy-MM-dd', 'fr-FR', 'Europe/France');
        this.bill = data.Bill;
        console.log(data.Bill)
        // this.bill.deadline = formatDate(data.Bill.deadline, 'yyyy-MM-dd', 'fr-FR', 'Europe/France');
        // this.clientService.getOneCostomers(this.bill.clientId as string).subscribe({
        //   next: async (data2: { error: false, Client: ClientInterfaceJson }) => {
        //     this.client = data2.Client;
        //   }
        // });
      },
      error: async (error: HttpErrorResponse) => {
        return error;
      }
    });
  }
  navTo(path:string) {
    this.router.navigate([path]);
}


}


