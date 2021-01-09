import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customer-list/customer-list.component';
import { FilterTextboxComponent } from './customer-list/filter-textbox.component';


@NgModule({
  imports: [CommonModule],
  declarations: [CustomersComponent, CustomersListComponent, FilterTextboxComponent],
  exports: [CustomersComponent]
})
export class CustomersModule { }
