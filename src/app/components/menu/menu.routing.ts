import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';

const menuRoutes: Routes = [

    {
        path: '',
        component: MenuComponent,
        children: []
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(menuRoutes)
    ],
    providers: [],
    exports: [
        RouterModule,
    ]
})

export class MenuRoutingModule { }
