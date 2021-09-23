import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client/client.service';
import { ClientInterface} from 'src/interfaces/userInterface';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.scss']
})
export class ListeClientsComponent implements OnInit {
  id :string | null= '';
  client: ClientInterface[] = [] ;
  files: any[] = [];
  requestEnd = 0;
  updateFile = false;
  oneClient: any;
  filtersearchC: ClientInterface[] =[];
  filtersearchresultC : ClientInterface[] =[];
  filterName = '0';
  searchValue = '';
  private items: string[] = [];
  constructor(private router: Router,
     private clientService : ClientService) { }

  ngOnInit() {
    this.initData();
  }
  // initializeItems() {
  //   this.items = this.client;
  // }
  // getItems(ev: any) {
    // Reset items back to all of the items
    // this.initializeItems();

    // set val to the value of the searchbar
    // let val = ev.target.value;

    // if the value is an empty string don't filter the items
  //   if (val && val.trim() != '') {
  //     this.items = this.items.filter((item) => {
  //       return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  // }
  initData() {
    this.clientService.getCostomers().subscribe({
      next: (data: { error: false, Client: ClientInterface[] }) => {
        this.client = data.Client;
        this.filtersearchC = data.Client;
        this.search();
        // this.initializeItems()
       },
        error: (error: any) => { console.log(error);}
    });

  }
  deleteUser=(ide: any) => {
    this.clientService.getDeleteCostomers(ide).subscribe({
      next: (data: { error: false, message: 'success' }) => {
       },
        error: (error: any) => { console.log(error);}
    });
  }
  navTo(path:string) {
    this.router.navigate([path]);
  }
  search(chaine?: any){
    if (chaine && chaine.value) { this.filterName = chaine.value; }

    this.filtersearchC = this.client.filter(client => {
      const searchProject = (): any => {
        if (client.name.toLowerCase().includes(this.searchValue.toLowerCase())) {
          return true;
        } 
      }; 
      return searchProject();
  });
}

}