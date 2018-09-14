import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu.routing';
import { SharedModule } from '../../shared/shared.module';

import { MenuComponent } from './menu.component';

@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule
  ],
  declarations: [MenuComponent]
})
export class MenuModule { }
