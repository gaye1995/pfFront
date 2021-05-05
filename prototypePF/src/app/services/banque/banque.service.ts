import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BanqueService {
  public url = 'https://business-cloud-logiciel-api.herokuapp.com/'

  constructor(private http: HttpClient) { }
  createbanque(libelle: string, name: string,iban: string ,bic: string , address: string ,zip: string, city: string, country: string){
    return this.http.post<any>(this.url + `banque/createBanque`, {  libelle, name,iban, bic, address , zip , city , country });
}
getOnebanque(id : string){
  return this.http.get<any>(this.url + `banque/`+id);
}
getbanque(){
  return this.http.get<any[]>(this.url + `banque/all`);
}
}