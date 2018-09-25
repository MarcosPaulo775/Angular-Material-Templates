import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVendaComponent } from './add-venda.component';

const addVendasRoutes: Routes = [

    {
        path: '',
        component: AddVendaComponent,
        children: []
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(addVendasRoutes)
    ],
    providers: [],
    exports: [
        RouterModule,
    ]
})

export class AddVendasRoutingModule { }