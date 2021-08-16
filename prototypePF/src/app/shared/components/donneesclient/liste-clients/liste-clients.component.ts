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
  private searchQuery: string = '';
  private items: string[] = [];
  constructor(private router: Router,
     private clientService : ClientService, 
     private billService :BillService, 
     private route: ActivatedRoute,
     private userService: UserService) { }

  ngOnInit() {
    this.initData();
  }
  initializeItems() {
    this.items = this.client;
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  initData() {
    this.clientService.getCostomers().subscribe({
      next: (data: { error: false, Client: ClientInterfaceJson }) => {
        console.log(data.Client)
        this.client = data.Client;
        this.initializeItems()
       },
        error: (error: any) => { console.log(error);}
    });

  }
  deleteUser=() => {
    this.clientService.getDeleteCostomers(this.id).subscribe({
      next: (data: { error: false, message: 'success' }) => {
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