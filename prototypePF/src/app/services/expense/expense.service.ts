import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  public url = 'https://business-cloud-logiciel-api.herokuapp.com/'

  constructor(private http: HttpClient) { }
  getExpense() {
    return this.http.get<any>(this.url + `client/expense/all`)
  }
  getOneExpense(id: string){
    return this.http.get<any>(this.url + `client/expense/`+id )
  }
}
