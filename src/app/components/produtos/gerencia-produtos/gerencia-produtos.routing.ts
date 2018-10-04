import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerenciaProdutosComponent } from './gerencia-produtos.component';

const gerenciaProdutosRoutes: Routes = [

    {
        path: '',
        component: GerenciaProdutosComponent,
        children: []
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(gerenciaProdutosRoutes)
    ],
    providers: [],
    exports: [
        RouterModule,
    ]
})

export class GerenciaProdutosRoutingModule { }