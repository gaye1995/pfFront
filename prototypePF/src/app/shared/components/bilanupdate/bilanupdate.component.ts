import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article/article.service';
import { BilanService } from 'src/app/services/bilan-service.service';
import { BillService } from 'src/app/services/bill/bill.service';
import { ArticleInterface } from 'src/interfaces/articleInterface';
import { ActifInterface, BilanInterface, createActif, createPassif, PassifInterface } from 'src/interfaces/BilanInterface';
import { BillInterface } from 'src/interfaces/billInterface';

@Component({
  selector: 'app-bilanupdate',
  templateUrl: './bilanupdate.component.html',
  styleUrls: ['./bilanupdate.component.scss']
})
export class BilanupdateComponent implements OnInit {
  id :string | null= '';
  bilan: any;
  bill: any;
  billPayee: any;
  immobilisation : any;
  selectedBill = {  selectedId: ''};

  // articles: any;
  selectedArticle = { name: '', selectedId: '', quantity: 0, tva: 0, price: 0, description: '', accountNumber: 999999 };
  listArticles: any = [];
  constructor(private router: Router,
    private route: ActivatedRoute,
    private bilanService: BilanService, private billService: BillService) {
    }
 
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) { this.initData(); }
    this.initData();
  }
  initData() {
    this.bilanService.getOneBilan(this.id).subscribe({
      next: (data: { error: false, bilan: BilanInterface }) => {
        this.bilan = data.bilan;
      }
    })
    this.billService.getAllBill().subscribe({
      next: (data: { error: false, Bill: BillInterface }) => {
        this.bill = data.Bill;
      //   console.log(this.bill)
      //   const immobilisation: any[] = [];
      //   this.bill.forEach((element: { articles: any}) => {
      //     immobilisation.push(element.articles)
      //   });
      }
    })

  }
  ArticleList(id: string) {
    const articles: { articleId: string, quantity: number }[] = [];
    console.log(this.bill)
    this.bill.articles.map((article: any) => {
      articles.push({ articleId: (article.articleId._id) ? article.articleId._id : article.articleId.id, quantity: article.quantity });
    });
    articles.push({ articleId: id, quantity: this.selectedArticle.quantity });
    console.log(articles);
    return articles;
  }

  BillList(id: string) {
    const bills: { billId: string }[] = [];
    this.bill.billId.map((bill: any) => {
      bills.push({ billId: (bill._id) ? bill.billId._id : bill.billId.id});
    });
    bills.push({ billId: id});
    return bills;
  }
  async updateBilan(immobilisation: { articleId: string, quantity: number }[],creance: { billId: string}[]) {
    this.bilanService.updateBilan({ id: this.bilan.id, immobilisation: immobilisation, creance : creance }).subscribe({
      next: async (data: { error: false, bilan: BilanInterface }) => {
        this.bilan = data.bilan;
        this.selectedArticle = { name: '', selectedId: '', quantity: 0, tva: 0, price: 0, description: '', accountNumber: 999999 };
        console.log(this.selectedArticle);
      },
      error: (error: any) => { console.log(error); }
    });
  }
  async updateBilanActif() {
    this.updateBilan(this.ArticleList(this.selectedArticle.selectedId), this.BillList(this.selectedBill.selectedId));
  }

}
