import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UsersInterfaceJson } from 'src/interfaces/userInterface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  current :any;
  usercurrent : any;
  user : any;
  id = '';
  name : string = '';
  password : string = '';
  confirm : string = '';
  societe : string = '';
  siret : string = '';
  adresse : string = '';
  codepostal : string = '';
  ville : string = '';
  telephone : string = '';

  constructor(private router: Router, private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.current = localStorage.getItem('currentUser');
    this.usercurrent = JSON.parse(this.current);
    // this.id = this.route.snapshot.params.get('id');
    if (this.id) { this.initData(); }
  }
  initData() {
    console.log(localStorage.getItem('currentUser'));
    this.authService.getOneUser(this.id).subscribe({
          next:(data :{error : false, comptatable: UsersInterfaceJson}) => {
          this.user = data.comptatable;
          },
          error: (error: any) => { console.log(error); }, // Quand ca marche pas
          complete: () => { }, // Quand il n'y aura plus aucun changement
        }); 
   }
  updateUser(){
   
    this.authService.updateuser(this.name, this.password, this.confirm, this.societe, this.siret, this.adresse, this.codepostal, this.ville, this.telephone).subscribe({
      next: () => { console.log("sucess")}, // Quand ca marche
      error: (error: any) => { console.log(error); }, // Quand ca marche pas
      complete: () => { }, // Quand il n'y aura plus aucun changement
    });
  }
}


