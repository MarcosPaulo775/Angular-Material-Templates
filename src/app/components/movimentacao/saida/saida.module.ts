import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SaidaRoutingModule } from './saida.routing';
import { SharedModule } from '../../../shared/shared.module';

import { SaidaComponent } from './saida.component';

@NgModule({
  imports: [
    CommonModule,
    SaidaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [SaidaComponent]
})
export class SaidaModule { }
