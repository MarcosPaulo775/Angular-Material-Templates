import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RepresentantesRoutingModule } from './representantes.routing';
import { SharedModule } from '../../shared/shared.module';

import { RepresentantesComponent } from './representantes.component';
import { AddRepresentanteComponent } from '../popups/representantes-popups/add-representante/add-representante.component';
import { InfoRepresentanteComponent } from '../popups/representantes-popups/info-representante/info-representante.component';
import { ConfirmComponent } from '../popups/confirm/confirm.component';

@NgModule({
  imports: [
    CommonModule,
    RepresentantesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [RepresentantesComponent, AddRepresentanteComponent , InfoRepresentanteComponent],
  entryComponents: [AddRepresentanteComponent, InfoRepresentanteComponent]
})
export class RepresentantesModule { }
