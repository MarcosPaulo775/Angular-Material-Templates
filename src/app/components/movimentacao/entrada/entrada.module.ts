import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EntradaRoutingModule } from './entrada.routing';
import { SharedModule } from '../../../shared/shared.module';

import { EntradaComponent } from './entrada.component';

@NgModule({
  imports: [
    CommonModule,
    EntradaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [EntradaComponent]
})
export class EntradaModule { }
