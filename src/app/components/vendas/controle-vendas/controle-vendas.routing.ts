import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControleVendasComponent } from './controle-vendas.component';

const ctrlVendasRoutes: Routes = [

    {
        path: '',
        component: ControleVendasComponent,
        children: []
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(ctrlVendasRoutes)
    ],
    providers: [],
    exports: [
        RouterModule,
    ]
})

export class ControleVendasRoutingModule { }