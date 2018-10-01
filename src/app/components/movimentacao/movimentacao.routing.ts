import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovimentacaoComponent } from './movimentacao.component';

const movRoutes: Routes = [

    {
        path: '',
        component: MovimentacaoComponent,
        children: [
            {
                path: '',
                redirectTo: 'Controle',
                pathMatch: 'full'
            },
            {
                path: 'Controle',
                loadChildren: './controle-movimentacao/controle-movimentacao.module#ControleMovimentacaoModule'
            },
            {
                path: 'Entrada',
                loadChildren: './entrada/entrada.module#EntradaModule'
            },
            /*
          {
            path: 'Saida',
            loadChildren: './add-venda/add-venda.module#AddVendaModule'
          },*/
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(movRoutes)
    ],
    providers: [],
    exports: [
        RouterModule,
    ]
})

export class MovimentacaoRoutingModule { }