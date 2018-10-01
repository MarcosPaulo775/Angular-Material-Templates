import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ControleMovimentacaoRoutingModule } from './controle-movimentacao.routing';
import { SharedModule } from '../../../shared/shared.module';

import { ControleMovimentacaoComponent } from './controle-movimentacao.component';
import { InfoMovimentacaoComponent } from '../../popups/movimentacao-popups/info-movimentacao/info-movimentacao.component';

@NgModule({
  imports: [
    CommonModule,
    ControleMovimentacaoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [ControleMovimentacaoComponent, InfoMovimentacaoComponent],
  entryComponents: [InfoMovimentacaoComponent]

})
export class ControleMovimentacaoModule { }
