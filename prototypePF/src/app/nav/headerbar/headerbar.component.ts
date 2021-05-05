import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.scss']
})
export class HeaderbarComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private authService: AuthService ) { }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
  disconnect(){
    this.authService.disconnect().subscribe({
      next: () => {
      // localStorage.removeItem("token");
      this.router.navigate(['/'])
     localStorage.removeItem("token");
    }, // Quand ca marche
      error: (error: any) => { localStorage.removeItem("token")}, // Quand ca marche pas
      complete: () => { }, // Quand il n'y aura plus aucun changement
    });
}
}
