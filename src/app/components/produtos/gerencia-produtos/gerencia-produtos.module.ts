import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GerenciaProdutosRoutingModule } from './gerencia-produtos.routing';
import { SharedModule } from '../../../shared/shared.module';

import { GerenciaProdutosComponent } from './gerencia-produtos.component';
import { AddVariavelComponent } from '../../popups/produtos-popups/gerenciamento/add-variavel/add-variavel.component';

@NgModule({
  imports: [
    CommonModule,
    GerenciaProdutosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [GerenciaProdutosComponent, AddVariavelComponent],
  entryComponents: [AddVariavelComponent]
})
export class GerenciaProdutosModule { }
