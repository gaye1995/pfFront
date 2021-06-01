import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersInterfaceJson } from 'src/interfaces/userInterface';

@Component({
  selector: 'app-sidnavliste',
  templateUrl: './sidnavliste.component.html',
  styleUrls: ['./sidnavliste.component.scss']
})
export class SidnavlisteComponent implements OnInit {
  usercurrent : any;
  id :string = '' ;
  user :any;
  curentuser: any;
  panelOpenState = false;
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private authService: AuthService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.curentuser =  (localStorage.getItem('currentUser'));
    this.usercurrent = JSON.parse(this.curentuser);
  }
  initData() {
      // this.curentuser = localStorage.getItem('currentUser'); 
    }

}
