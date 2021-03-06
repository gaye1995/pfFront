import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HeaderbarComponent } from '../nav/headerbar/headerbar.component';
import { FooterbarComponent } from '../nav/footerbar/footerbar.component';
import { SidnavlisteComponent } from '../nav/sidnavliste/sidnavliste.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { HighchartsChartModule } from 'highcharts-angular';
import { AreacompteComponent } from './widgets/areacompte/areacompte.component';
import { CardComponent } from './widgets/card/card.component';
import { BanqueComponent } from './components/banque/banque.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ListebanqueComponent } from './components/listebanque/listebanque.component';

// import { CardComponent } from './widgets/card/card.component';
// import { PieComponent } from './widgets/pie/pie.component';


@NgModule({
  declarations: [
    HeaderbarComponent,
    FooterbarComponent,
    SidnavlisteComponent,
     AreacompteComponent,
     CardComponent,
     BanqueComponent,
     ListebanqueComponent,
    // PieComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    HighchartsChartModule,
    MatDividerModule,
    FlexLayoutModule,
    MatExpansionModule,
    RouterModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    // HighchartsChartModule,
  ],
  exports: [
    HeaderbarComponent,
    FooterbarComponent,
    SidnavlisteComponent,
    AreacompteComponent,
    // SubheadclientsComponent,
    CardComponent,
    // PieComponent
  ]
})
export class SharedModule { }
