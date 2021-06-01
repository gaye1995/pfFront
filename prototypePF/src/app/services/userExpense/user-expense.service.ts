import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserExpenseService {
  public url = 'https://business-cloud-logiciel-api.herokuapp.com/'

  constructor(private http: HttpClient) { }
  getUserExpense(id: string | null) {
    return this.http.get<any>(this.url + `/employee/note-de-frais/`+ id)
  }
}
