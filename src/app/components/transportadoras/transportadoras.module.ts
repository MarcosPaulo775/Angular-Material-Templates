import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TransportadorasRoutingModule } from './transportadoras.routing';
import { SharedModule } from '../../shared/shared.module';

import { TransportadorasComponent } from './transportadoras.component';
import { AddTransportadoraComponent } from '../popups/transportadoras-popups/add-transportadora/add-transportadora.component';
import { InfoTransportadoraComponent } from '../popups/transportadoras-popups/info-transportadora/info-transportadora.component';
import { ConfirmComponent } from '../popups/confirm/confirm.component';

@NgModule({
  imports: [
    CommonModule,
    TransportadorasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [TransportadorasComponent, AddTransportadoraComponent, InfoTransportadoraComponent],
  entryComponents: [AddTransportadoraComponent, InfoTransportadoraComponent]
})
export class TransportadorasModule { }
