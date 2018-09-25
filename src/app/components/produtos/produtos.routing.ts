import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosComponent } from './produtos.component';

const produtosRoutes: Routes = [

    {
        path: '',
        component: ProdutosComponent,
        children: []
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(produtosRoutes)
    ],
    providers: [],
    exports: [
        RouterModule,
    ]
})

export class ProdutosRoutingModule { }