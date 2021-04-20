import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public url = 'https://business-cloud-logiciel-api.herokuapp.com/'

  constructor(private http: HttpClient) { }
  getCostomers() {
    return this.http.post<any>(this.url + `client/all`, {})
  }
  getOneCostomers(id: string){
    return this.http.post<any>(this.url + `client/:`+id , {})
  }
  deleteCustomers(email: string){
    return this.http.post<any>(this.url + `auth/forget-password`, { email })
  }
}