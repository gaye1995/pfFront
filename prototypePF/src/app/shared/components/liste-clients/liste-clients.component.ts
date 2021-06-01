import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from 'src/app/services/bill/bill.service';
import { ClientService } from 'src/app/services/client/client.service';
import { UserService } from 'src/app/services/user/user.service';
import { BillInterface } from 'src/interfaces/billInterface';
import { ClientInterfaceJson} from 'src/interfaces/userInterface';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.scss']
})
export class ListeClientsComponent implements OnInit {
  id :string | null= '';
  client: any ;

  files: any[] = [];

  requestEnd = 0;

  updateFile = false;
  oneClient: any;
  constructor(private router: Router,
     private clientService : ClientService, 
     private billService :BillService, 
     private route: ActivatedRoute,
     private userService: UserService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) { this.initData(); }
    this.initData();
  }
  initData() {
    this.clientService.getCostomers().subscribe({
      next: (data: { error: false, Client: ClientInterfaceJson }) => {
        this.client = data.Client;
        // this.clientService.getOneCostomers(this.client.Id as string).subscribe({
        //   next: async (data2: { error: false, user: ClientInterfaceJson }) => {
        //     this.oneClient = data2.user;
        //   }
        // });
       },
        error: (error: any) => { console.log(error);}
    });

  }
  navTo(path:string) {
    this.router.navigate([path]);
  }
  sortFiles(count: number) {
    if (count === 2) {
      this.updateFile = false;
      this.files.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
  }
}