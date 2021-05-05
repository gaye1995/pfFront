import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillService } from 'src/app/services/bill/bill.service';
import { ClientService } from 'src/app/services/client/client.service';
import { BillInterface } from 'src/interfaces/billInterface';
import { ClientInterfaceJson } from 'src/interfaces/userInterface';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  id = '';
  user: any ;

  files: any[] = [];

  requestEnd = 0;

  updateFile = false;
  constructor(private router: Router, private clientService : ClientService, private billService :BillService) { }

  ngOnInit(): void {
  }
  initData() {
    this.clientService.getOneCostomers(this.id).subscribe({
      next: (data: { error: false, user: ClientInterfaceJson }) => {
        this.user = data.user;

      //   if (this.user.type === 'client') {
      //     this.updateFile = true;
      //     this.billService.getAllBill().subscribe({
      //       next: (data2: { error: false, bills: BillInterface[] }) => {
      //         data2.bills = data2.bills.filter(bill => {
      //           return (bill.clientId as ShortUserListI).id === this.user.id;
      //         });
      //         data2.bills.map((bill) => {
      //           this.files.push(bill);
      //         });
      //         this.sortFiles(this.requestEnd += 1);
      //       },
      //     });
      //   }
      }
    });

  }

  sortFiles(count: number) {
    if (count === 2) {
      this.updateFile = false;
      this.files.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
  }
}
