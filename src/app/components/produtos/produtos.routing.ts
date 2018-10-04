import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosComponent } from './produtos.component';

const produtosRoutes: Routes = [

    {
        path: '',
        component: ProdutosComponent,
        children: [
            {
                path: '',
                redirectTo: 'Controle',
                pathMatch: 'full'
            },
            {
                path: 'Controle',
                loadChildren: './controle-produtos/controle-produtos.module#ControleProdutosModule'
            },
            {
                path: 'Gerencia',
                loadChildren: './gerencia-produtos/gerencia-produtos.module#GerenciaProdutosModule'
            },
        ]
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