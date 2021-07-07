import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  public url = 'https://business-cloud-logiciel-api.herokuapp.com/'

  constructor(private http: HttpClient) { }

  getAllBill() {
    return this.http.get<any>(this.url + `client/facture/all`);
  }

  getOneBill(id: string) {
    return this.http.get<any>(this.url + `client/facture` + id);
  }
  getBillbyClient(id: string | null) {
    return this.http.get<any>(this.url + `client/` + id + `/factures` );
  }

  // create(data: BillCreateI) {
  //   return this.http.post<any>(this.url + `bill`, data);
  // }

  // update(data: BillUpdateI) {
  //   return this.http.put<any>(this.url + `bill`, data);
  // }

  delete(id: string) {
    return this.http.delete<any>(this.url + `bill/` + id);
  }}
