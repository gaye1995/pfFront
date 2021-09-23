import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BilanInterface, createActif, createPassif, EditActif } from 'src/interfaces/BilanInterface';
import { BillArticleI, BillInterface } from 'src/interfaces/billInterface';

@Injectable({
  providedIn: 'root'
})
export class BilanService {
  public url = 'https://business-cloud-logiciel-api.herokuapp.com/'

  constructor(private http: HttpClient) { }
  createBilan(dateBilan: Date) {
    return this.http.post<any>(this.url + `bilan/create-bilan`, {dateBilan})
  }
  getBilan() {
    return this.http.get<any>(this.url + `bilan`)
  }
  getOneBilan(id: string| null) {
    return this.http.get<any>(this.url + `bilan/`+ id)
  }

  updateBilan(data: any) {
    return this.http.put<any>(this.url + `bilan/`,data)
  }

}
