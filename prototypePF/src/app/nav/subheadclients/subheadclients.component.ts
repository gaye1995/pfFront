import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from 'src/app/services/bill/bill.service';
import { ClientService } from 'src/app/services/client/client.service';
import { UserService } from 'src/app/services/user/user.service';
import { BillInterface } from 'src/interfaces/billInterface';
import { ClientInterfaceJson} from 'src/interfaces/userInterface';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-subheadclients',
  templateUrl: './subheadclients.component.html',
  styleUrls: ['./subheadclients.component.scss']
})
export class SubheadclientsComponent implements OnInit {
  activeTab!: string;
  id:string | null =''
  user: any ;

  handleTabChange(tab: MatTabChangeEvent) {
    this.activeTab = tab.tab.ariaLabel;
  }
  constructor(private router: Router, private clientService : ClientService, private billService :BillService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) { this.initData(); 
    console.log(this.id)}
    this.initData();
  }
  initData() {
    this.clientService.getOneCostomers(this.id).subscribe({
      next: (data: { error: false, user: ClientInterfaceJson }) => {
        this.user = data.user;
      }
    });
   }

}
