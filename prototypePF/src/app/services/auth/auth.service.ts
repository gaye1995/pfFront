import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url = 'https://business-cloud-logiciel-api.herokuapp.com/'

  constructor(private http: HttpClient) { }
  login(email: string, password: string){
    return this.http.post<any>(this.url + `auth/login`, { email, password})
  }
}

