import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url = 'https://business-cloud-logiciel-api.herokuapp.com/'

  constructor(private http: HttpClient) { }
  getEmployees() {
    return this.http.get<any>(this.url + `employee/all`)
  }
  getOneEmployee(id: string){
    return this.http.get<any>(this.url + `employee/`+id )
  }}
