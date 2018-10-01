import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MovimentacaoRoutingModule } from './movimentacao.routing';
import { SharedModule } from '../../shared/shared.module';

import { MovimentacaoComponent } from './movimentacao.component';

@NgModule({
  imports: [
    CommonModule,
    MovimentacaoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [MovimentacaoComponent]
})
export class MovimentacaoModule { }
