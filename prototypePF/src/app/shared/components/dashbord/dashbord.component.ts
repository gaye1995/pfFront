import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService, ToasterPosition } from 'src/app/services/notification.service';
import { DashbordService } from '../dashbord.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
  styles: [`
  .toast {
    position: fixed;
    right: 0;
    width: 300px;
    height: 80px;
    padding: .75rem 1.25rem;
    margin-top: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
    animation: move 2s both;
  }

  .toast-success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }

  .toast-error {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }

  .toast-warning {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  }

  .close {
    position: absolute;
    top: 7px;
    right: 10px;
    font-size: 1.5em;
    cursor: pointer;
  }

  .toast-heading {
    margin-top: 10px;
  }

  @keyframes move {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
`]
})
export class DashbordComponent implements OnInit {
  //bigChart: any;
  bigChart = {};
  pieChart = {};
  cards: any;
  title = 'toaster-not';

 

  public categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(private DashbordService: DashbordService,
    private router: Router,
    private notifyService: NotificationService) { }
  showToasterSuccess(){
    this.notifyService.showSuccess( 'Well done!', 'This is a success alert',ToasterPosition.bottomLeft);
}
  ngOnInit(): void {
    this.bigChart = this.DashbordService.bigChart();
    this.cards = this.DashbordService.cards();
    this.pieChart = this.DashbordService.pieChart();


  }
  navTo(path: string) {
    this.router.navigate([path]);
  }
}
