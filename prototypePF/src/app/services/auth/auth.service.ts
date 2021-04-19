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
      map(response => {
        console.log(response.user);
      if (response.user && response.user.token) { localStorage.setItem('currentUser', JSON.stringify(response.user)); }
      return response;
      })
    )}
  register(name: string, email: string, password: string, confirm: string, role: string,  societe: string, siret: string,){
    return this.http.post<any>(this.url + `auth/register`, {name, email, password, confirm ,societe, role, siret })
  }
  forgetPassword(email: string){
    return this.http.post<any>(this.url + `auth/forget-password`, { email })
  }
}

