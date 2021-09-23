import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article/article.service';
import { BilanService } from 'src/app/services/bilan-service.service';
import { BillService } from 'src/app/services/bill/bill.service';
import { ArticleInterface } from 'src/interfaces/articleInterface';
import { ActifInterface, BilanInterface, createActif, createPassif, PassifInterface } from 'src/interfaces/BilanInterface';
import { BillInterface } from 'src/interfaces/billInterface';

@Component({
  selector: 'app-bilan',
  templateUrl: './bilan.component.html',
  styleUrls: ['./bilan.component.scss']
})
export class BilanComponent implements OnInit {
  dateBilan: any;
  bilans: any;
  id :string | null= '';
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
    this.bilanService.getBilan().subscribe({
      next: (data: { error: false, bilan: BilanInterface }) => {
        this.bilans = data.bilan;
        this.bilans.forEach((element:any) => {
          element.passif.totalPassif = element.passif.totalPassif.toFixed(2);
        });
      }
    })
  }
  async createBilan(){
    if(!this.dateBilan){
      console.log('Données obligatoires manquantes');
    }else{
      this.bilanService.createBilan(this.dateBilan).subscribe({
        next: (data: { error: false, bilan: any }) => {
          console.log(this.dateBilan);  
        },
        error: (error: any) => { console.log(error); }
      })
    }
  }

  // async updateBill() {
  //   this.bilanService.updateActif({ id: this.bill.id, articles: articleList }).subscribe({
  //     next: async (data: { error: false, bill: BillI }) => {
  //       this.bill = data.bill;
  //       this.selectedArticle = { name: '', selectedId: '', quantity: 0, tva: 0, price: 0, description: '', accountNumber: 999999 };
  //       await loading.dismiss();
  //       this.toasterService.presentSuccessToast(toasterText);
  //     },
  //     error: async (error: HttpErrorResponse) => {
  //       await loading.dismiss();
  //       if (error.error.code === '104201') { this.toasterService.presentErrorToast('ID de la facture manquant'); }
  //       else if (error.error.code === '104207') { this.toasterService.presentErrorToast('Format d\'article invalide'); }
  //       else if (error.error.code === '104208') { this.toasterService.presentErrorToast('Certains ID d\'articles sont invalides'); }
  //       else { this.toasterService.presentErrorToast('Erreur interne au serveur', { error }); }
  //     }
  //   });
  // }
}
