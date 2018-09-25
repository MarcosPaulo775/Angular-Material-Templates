import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VendasRoutingModule } from './vendas.routing';
import { SharedModule } from '../../shared/shared.module';

import { VendasComponent } from './vendas.component';

@NgModule({
  imports: [
    CommonModule,
    VendasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [VendasComponent],
})
export class VendasModule { }
