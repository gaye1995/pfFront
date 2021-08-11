import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserExpenseService {
  public url = 'https://business-cloud-logiciel-api.herokuapp.com/'

  constructor(private http: HttpClient) { }
  getUserExpense(id: string | null) {
    return this.http.get<any>(this.url + `employee/`+ id +`/note-de-frais`)
  }
}
