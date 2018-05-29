import {NgModule} from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import {SalesRoutingModule} from './sales-routing.module';
import {TransactionComponent} from './transactions/transaction.component';
import {ItemComponent} from './items/item.component';
import {LocationComponent} from './locations/location.component';

//Services
import { TransactionService } from './transactions/transaction.service';

@NgModule({
  imports: [
    SalesRoutingModule,
    ChartsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
      ButtonsModule.forRoot()
  ],
  declarations : [
    TransactionComponent,
    ItemComponent,
    LocationComponent
  ],
  providers : [TransactionService]
})
export class SalesModule{}
