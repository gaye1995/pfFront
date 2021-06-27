import { formatDate } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article/article.service';
import { BillService } from 'src/app/services/bill/bill.service';
import { ClientService } from 'src/app/services/client/client.service';
import { BillInterface } from 'src/interfaces/billInterface';
import { ClientInterfaceJson } from 'src/interfaces/userInterface';

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
  id = '';
  bill: any;
  client: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private billService: BillService,
    private clientService: ClientService,
    private articleService: ArticleService) {    }
  

  ngOnInit(): void {
  }
  async initData() {
    this.billService.getOneBill(this.id).subscribe({
      next: (data: { error: false, bill: BillInterface }) => {
        data.bill.createdAt = formatDate(data.bill.createdAt, 'yyyy-MM-dd', 'fr-FR', 'Europe/France');
        data.bill.deadline = formatDate(data.bill.deadline, 'yyyy-MM-dd', 'fr-FR', 'Europe/France');
        this.bill = data.bill;
        this.clientService.getOneCostomers(this.bill.clientId as string).subscribe({
          next: async (data2: { error: false, client: ClientInterfaceJson }) => {
            this.client = data2.client;
          }
        });
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


