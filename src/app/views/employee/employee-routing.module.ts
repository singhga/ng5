import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NewHireComponent} from './newhire/newhire.component';


const routes : Routes = [
  {
    path : '',
    data: {
      title: 'Employee'
    },
    children :
    [
      {
        path : 'newhire',
        component : NewHireComponent,
        data :
        {
          title : 'New Hire'
        }
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule{}
