import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name : string = '';
  password : string = '';
  confirm : string = '';
  societe : string = '';
  siret : string = '';
  adresse : string = '';
  codepostal : string = '';
  ville : string = '';
  telephone : string = '';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  updateUser(){
   
    this.authService.updateuser(this.name, this.password, this.confirm, this.societe, this.siret, this.adresse, this.codepostal, this.ville, this.telephone).subscribe({
      next: () => { console.log("sucess")}, // Quand ca marche
      error: (error: any) => { console.log(error); }, // Quand ca marche pas
      complete: () => { }, // Quand il n'y aura plus aucun changement
    });
  }
}

