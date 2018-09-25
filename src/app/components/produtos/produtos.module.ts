import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProdutosRoutingModule } from './produtos.routing';
import { SharedModule } from '../../shared/shared.module';

import { ProdutosComponent } from './produtos.component';
import { AddProdutoComponent } from '../popups/produtos-popups/add-produto/add-produto.component';
import { InfoProdutoComponent } from '../popups/produtos-popups/info-produto/info-produto.component';


@NgModule({
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [ProdutosComponent, AddProdutoComponent, InfoProdutoComponent],
  entryComponents: [AddProdutoComponent, InfoProdutoComponent]
})
export class ProdutosModule { }
