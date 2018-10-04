import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControleProdutosComponent } from './controle-produtos.component';

const ctrlProdutosRoutes: Routes = [

    {
        path: '',
        component: ControleProdutosComponent,
        children: []
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(ctrlProdutosRoutes)
    ],
    providers: [],
    exports: [
        RouterModule,
    ]
})

export class ControleProdutosRoutingModule { }