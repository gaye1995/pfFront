import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';


  constructor(private router: Router, private authService: AuthService) { 
  }
  ngOnInit(): void {
 
  }
  login(){
      if(this.email && this.password) {
      const mailUser = this.email.trim();
      const passwordUser = this.password.trim();
      this.authService.login(mailUser, passwordUser).subscribe({
        next: () => { this.router.navigate(['/dashbord'])}, // Quand ca marche
        error: (error: any) => { console.log(error); }, // Quand ca marche pas
        complete: () => { }, // Quand il n'y aura plus aucun changement
      });
    }
  }
  
navTo(path:string) {
  this.router.navigate([path]);
}



}