import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ControleVendasRoutingModule } from './controle-vendas.routing';
import { SharedModule } from '../../../shared/shared.module';

import { InfoVendaComponent } from '../../popups/vendas-popups/info-venda/info-venda.component';
import { ControleVendasComponent } from './controle-vendas.component';

@NgModule({
  imports: [
    CommonModule,
    ControleVendasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [ControleVendasComponent, InfoVendaComponent],
  entryComponents: [InfoVendaComponent]
})
export class ControleVendasModule { }
