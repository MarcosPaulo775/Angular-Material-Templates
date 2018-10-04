import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddVendasRoutingModule } from './add-venda.routing';
import { SharedModule } from '../../../shared/shared.module'
  ;
import { AddVendaComponent } from './add-venda.component';

@NgModule({
  imports: [
    CommonModule,
    AddVendasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [AddVendaComponent]
})
export class AddVendaModule { }