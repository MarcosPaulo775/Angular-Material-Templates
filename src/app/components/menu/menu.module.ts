import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu.routing';
import { SharedModule } from '../../shared/shared.module';

import { MenuComponent } from './menu.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule,
  ],
  declarations: [MenuComponent , FooterComponent]
})
export class MenuModule { }
