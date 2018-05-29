import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TransactionComponent} from './transactions/transaction.component';
import {LocationComponent} from './locations/location.component';
import {ItemComponent} from './items/item.component';

const routes : Routes = [
  {
    path : '',
    data: {
      title: 'Sales'
    },
    children :
    [
      {
        path : 'transactions',
        component : TransactionComponent,
        data :
        {
          title : 'Transactions'
        }
      },
      {
        path : 'locations',
        component : LocationComponent,
        data :
        {
          title : 'Locations'
        }
      },
      {
        path : 'items',
        component : ItemComponent,
        data :
        {
          title : 'Items'
        }
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule{}
