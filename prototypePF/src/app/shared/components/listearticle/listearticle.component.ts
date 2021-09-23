import { element } from 'protractor';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article/article.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ArticleInterface } from 'src/interfaces/articleInterface';
import { ServiceInterface } from 'src/interfaces/serviceInterface';


@Component({
  selector: 'app-listearticle',
  templateUrl: './listearticle.component.html',
  styleUrls: ['./listearticle.component.scss']
})
export class ListearticleComponent implements OnInit {
  articles: ArticleInterface[] =[];
  service: any;
  total :any[] = [];
  filtersearchA: ArticleInterface[] =[];
  filtersearchresultA : ArticleInterface[] =[];
  filterName = '0';
  searchValue = '';

  constructor(private router: Router, private articleService: ArticleService, private authService: AuthService) {     }
    
  ngOnInit(): void {
    this.initData();
  }
  initData() {
    this.authService.getService().subscribe({
      next: (data: { error: false, Services: ServiceInterface }) => {
        this.service = data.Services;
       },
        error: (error: any) => { console.log(error);}
    });
    this.articleService.getArticles().subscribe({
      next: (data: { error: false, Articles: ArticleInterface[] }) => {
        this.articles = data.Articles;
        this.filtersearchA = data.Articles;
        this.search();
        this.articles.forEach((element:any) => {
          this.total.push((element.price + element.price * element.tva /100).toFixed(2));
        });
       },
        error: (error: any) => { console.log(error);}
    });

  }

  search(chaine?: any){
    if (chaine && chaine.value) { this.filterName = chaine.value; }

    this.filtersearchA = this.articles.filter(article => {
      const searchProject = (): any => {
        if (article.name.toLowerCase().includes(this.searchValue.toLowerCase())) {
          return true;
        } 
      }; 
      return searchProject();
  });
}

  navTo(path:string) {
    this.router.navigate([path]);
}


}


