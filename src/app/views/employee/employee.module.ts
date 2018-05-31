import {NgModule} from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import {EmployeeRoutingModule} from './employee-routing.module';
import {NewHireComponent} from './newhire/newhire.component';


@NgModule({
  imports: [
    EmployeeRoutingModule,
    ChartsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    CollapseModule,
      ButtonsModule.forRoot()
  ],
  declarations : [
    NewHireComponent
  ],
  providers : []
})
export class EmployeeModule{}
