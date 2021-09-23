import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ServiceInterface } from 'src/interfaces/serviceInterface';

@Component({
  selector: 'app-listeservice',
  templateUrl: './listeservice.component.html',
  styleUrls: ['./listeservice.component.scss']
})

export class ListeserviceComponent implements OnInit {
  services: ServiceInterface[]=[];
  total: any[]=[];
  filtersearchS: ServiceInterface[] =[];
  filtersearchresultS : ServiceInterface[] =[];
  filterName = '0';
  searchValue = '';
  constructor(private router: Router, private authService: AuthService) {     }

    
  ngOnInit(): void {
    this.initData();
  }
  initData() {
    this.authService.getService().subscribe({
      next: (data: { error: false, Services: ServiceInterface[] }) => {
        this.services = data.Services;
        this.filtersearchS = data.Services;
        this.search();
        console.log(this.services)
        this.services.forEach((element:any) => {
          this.total.push((element.price + element.price).toFixed(2));
        });
       },
        error: (error: any) => { console.log(error);}
    });

  }
  search(chaine?: any){
    if (chaine && chaine.value) { this.filterName = chaine.value; }

    this.filtersearchS = this.services.filter(service => {
      const searchProject = (): any => {
        if (service.name.toLowerCase().includes(this.searchValue.toLowerCase())) {
          return true;
        } 
      }; 
      return searchProject();
  });
}
  navTo(path:string) {
    this.router.navigate([path]);
}
}



