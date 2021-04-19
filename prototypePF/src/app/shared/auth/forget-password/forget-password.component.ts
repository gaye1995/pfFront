import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  email: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  resetPassword(){
    if(this.email) {
    const mailUser = this.email.trim();
    console.log(mailUser)
    this.authService.forgetPassword(mailUser).subscribe({
      next: () => { this.router.navigate(['/'])}, // Quand ca marche
      error: (error: any) => { console.log(error); }, // Quand ca marche pas
      complete: () => { }, // Quand il n'y aura plus aucun changement
    });
  }
}
  navTo(path:string) {
    this.router.navigate([path]);
  }

}
