import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderarticleComponent } from 'src/app/nav/headerarticle/headerarticle.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatTreeModule} from '@angular/material/tree';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatExpansionModule} from '@angular/material/expansion';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxElectronModule } from 'ngx-electron';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule } from '@angular/material/list';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import {MatSliderModule} from '@angular/material/slider';
import { ListearticleComponent } from './listearticle.component';
import { CloctureComponent } from '../clocture/clocture.component';
import { BilanComponent } from '../bilan/bilan.component';
import { DepenseComponent } from '../depense/depense.component';
import { ComptederesultatComponent } from '../comptederesultat/comptederesultat.component';
import { RepportComponent } from '../repport/repport.component';
import { ArearepportComponent } from '../../widgets/arearepport/arearepport.component';
import { CardrepportComponent } from '../../widgets/cardrepport/cardrepport.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    CloctureComponent,
    ListearticleComponent,
    HeaderarticleComponent,
    BilanComponent,
    DepenseComponent,
    ComptederesultatComponent,
    RepportComponent,
    ArearepportComponent,
    CardrepportComponent,


  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    MatDialogModule,
    MatChipsModule,
    MatSliderModule,
    MatTabsModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTableModule,
    ModalModule,
    RouterModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    TooltipModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatGridListModule,
    MatTreeModule,
      // Material
      MatSidenavModule,
      FlexLayoutModule,
      MatTreeModule,
      MatSelectModule,
      MatExpansionModule,
      ChartsModule,
      NgbModule,
      NgxElectronModule,
      FormsModule,
      ReactiveFormsModule,
      BsDropdownModule,
  ],
  exports: [
    HeaderarticleComponent,
     CardrepportComponent,
    // PieComponent
  ]
})
export class ListearticleModule { }
