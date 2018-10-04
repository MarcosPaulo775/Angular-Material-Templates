import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendasComponent } from './vendas.component';

const vendasRoutes: Routes = [

    {
        path: '',
        component: VendasComponent,
        children: [
            {
                path: '',
                redirectTo: 'Controle',
                pathMatch: 'full'
              },
              {
                path: 'Controle',
                loadChildren: './controle-vendas/controle-vendas.module#ControleVendasModule'
              },
              {
                path: 'NovaVenda',
                loadChildren: './add-venda/add-venda.module#AddVendaModule'
              },
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(vendasRoutes)
    ],
    providers: [],
    exports: [
        RouterModule,
    ]
})

export class VendasRoutingModule { }