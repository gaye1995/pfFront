import { formatDate } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { drawDOM } from '@progress/kendo-drawing';
import { ArticleService } from 'src/app/services/article/article.service';
import { BillService } from 'src/app/services/bill/bill.service';
import { ClientService } from 'src/app/services/client/client.service';
import { BillInterface } from 'src/interfaces/billInterface';


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
    private billService: BillService, private clientService: ClientService) {    }
  

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
       this.initData();
  }
  this.initData()
}
initData() {
    this.billService.getBillbyClient(this.id).subscribe({
      next: (data: { error: false, Bill: BillInterface}) => {
        this.bill = data.Bill;
        this.client = this.clientService.getOneCostomers(this.id);
        console.log(this.client)
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


