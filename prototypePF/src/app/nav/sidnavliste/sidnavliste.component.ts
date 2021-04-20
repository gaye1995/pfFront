import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidnavliste',
  templateUrl: './sidnavliste.component.html',
  styleUrls: ['./sidnavliste.component.scss']
})
export class SidnavlisteComponent implements OnInit {
  panelOpenState = false;
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

}
