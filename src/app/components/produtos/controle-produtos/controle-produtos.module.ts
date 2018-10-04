import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../../shared/shared.module';

import { AddProdutoComponent } from '../../popups/produtos-popups/add-produto/add-produto.component';
import { ControleProdutosComponent } from './controle-produtos.component';
import { InfoProdutoComponent } from '../../popups/produtos-popups/info-produto/info-produto.component';
import { ControleProdutosRoutingModule } from './controle-produtos.routing';


@NgModule({
  imports: [
    CommonModule,
    ControleProdutosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [ControleProdutosComponent, AddProdutoComponent, InfoProdutoComponent],
  entryComponents: [AddProdutoComponent, InfoProdutoComponent]
})
export class ControleProdutosModule { }
