import { formatDate } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client/client.service';
import { EstimateInterface } from 'src/interfaces/estimateIterface';

@Component({
  selector: 'app-devisliste',
  templateUrl: './devisliste.component.html',
  styleUrls: ['./devisliste.component.scss']
})
export class DevislisteComponent implements OnInit {
  id :string | null= '';
  estimate: any;
  client: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientService) {    }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
       this.initData();
  }
  this.initData()
  }
  initData() {
    this.clientService.getEstimateByClient(this.id).subscribe({
      next: (data: { error: false, Estimate: EstimateInterface }) => {
        this.estimate = data.Estimate;
        console.log(data.Estimate);
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
