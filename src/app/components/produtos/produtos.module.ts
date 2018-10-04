import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProdutosRoutingModule } from './produtos.routing';
import { SharedModule } from '../../shared/shared.module';

import { ProdutosComponent } from './produtos.component';

@NgModule({
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [ProdutosComponent],
})
export class ProdutosModule { }
