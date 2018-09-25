import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientesRoutingModule } from './clientes.routing';
import { SharedModule } from '../../shared/shared.module';

import { ClientesComponent } from './clientes.component';
import { AddPessoaFisicaComponent } from '../popups/clientes-popups/add-pessoa-fisica/add-pessoa-fisica.component';
import { AddPessoaJuridicaComponent } from '../popups/clientes-popups/add-pessoa-juridica/add-pessoa-juridica.component';
import { InfoPessoaFisicaComponent } from '../popups/clientes-popups/info-pessoa-fisica/info-pessoa-fisica.component';
import { InfoPessoaJuridicaComponent } from '../popups/clientes-popups/info-pessoa-juridica/info-pessoa-juridica.component';

@NgModule({
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    ClientesComponent,
    AddPessoaFisicaComponent,
    AddPessoaJuridicaComponent,
    InfoPessoaFisicaComponent,
    InfoPessoaJuridicaComponent
  ],
  entryComponents: [
    AddPessoaFisicaComponent,
    AddPessoaJuridicaComponent,
    InfoPessoaFisicaComponent,
    InfoPessoaJuridicaComponent
  ]
})
export class ClientesModule { }
