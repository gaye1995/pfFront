import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  societe: string = '';
  role: string = '';
  siret: string = '';
  confirm: string = '';
 
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    
  }
  register(){
    if(this.name, this.email && this.password && this.confirm && this.role && this.siret && this.societe) {
      console.log(this.email)
    const mailUser = this.email.trim();
    const passwordUser = this.password.trim();
    this.authService.register(this.name, mailUser, passwordUser, this.confirm, this.role, this.societe, this.siret).subscribe({
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
