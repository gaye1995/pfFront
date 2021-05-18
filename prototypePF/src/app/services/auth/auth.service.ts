import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url = 'https://business-cloud-logiciel-api.herokuapp.com/'

  constructor(private http: HttpClient) { }
  login(email: string, password: string){
    return this.http.post<any>(this.url + `auth/login`, { email, password})
    .pipe(
      map(data => {
        console.log(data.token);
      if (data.user && data.user.token) { localStorage.setItem('currentUser', JSON.stringify(data.user)); }
      if (data.user && data.user.token) { localStorage.setItem('token', data.user.token); }
      return data;
      })
    )}

  register(name: string, email: string, password: string, confirm: string, role: string,  societe: string, siret: string,){
    return this.http.post<any>(this.url + `auth/register`, {name, email, password, confirm ,societe, role, siret })
  }
  forgetPassword(email: string){
    return this.http.post<any>(this.url + `auth/forget-password`, { email })
  }
  updateuser(name: string, password: string, confirm: string, societe: string, siret: string,adresse: string,codepostal: string,ville: string, telephone: string, ){
    return this.http.put<any>(this.url + `auth/update-user`, { name, password, confirm, societe, siret, adresse, codepostal, ville, telephone })
  }
  getOneUser(id: string){
    return this.http.get<any>(this.url + `auth/user/`+id)
  }
  disconnect(){
    return this.http.delete<any>(this.url + `auth/user/deconnect`);
  }

}



