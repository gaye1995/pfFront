import { formatDate } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from 'src/app/services/bill/bill.service';
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
  selector: 'app-factures-comptable',
  templateUrl: './factures-comptable.component.html',
  styleUrls: ['./factures-comptable.component.scss']
})
export class FacturesComptableComponent implements OnInit {
  id :string | null= '';
  bill: any;
  comptable: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private billService: BillService,
    ) {    }
  

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
       this.initData();
  }
  this.initData()
}
initData() {
    this.billService.getBillbyComptable(this.id).subscribe({
      next: (data: { error: false, BillComp: BillInterface }) => {
        this.bill = data.BillComp;
        console.log(data.BillComp)
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


