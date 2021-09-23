import { Observable } from 'rxjs';
import { ArticleInterface } from './../../../interfaces/articleInterface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  public url = 'https://business-cloud-logiciel-api.herokuapp.com/'

  constructor(private http: HttpClient) { }
  getArticles() {
    return this.http.get<any>(this.url + `articles`);
  }
  findByName(name: any): Observable<ArticleInterface[]>{
    const filter = `{"Where": {"name":{"LIKE": "%${name}%"}}}`;
    const params = new HttpParams().set('filter', filter);
    return this.http.get<ArticleInterface[]>(this.url + `articles`, {params});

  }
}
