import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';

const menuRoutes: Routes = [

    {
        path: '',
        component: MenuComponent,
        children: [
            {
                path: '',
                redirectTo: 'Home',
                pathMatch: 'full'
              },
              {
                path: 'Home',
                loadChildren: '../home/home.module#HomeModule'
              },
              {
                path: 'Representantes',
                loadChildren: '../representantes/representantes.module#RepresentantesModule'
              },
              {
                path: 'Transportadoras',
                loadChildren: '../transportadoras/transportadoras.module#TransportadorasModule'
              },
              {
                path: 'Produtos',
                loadChildren: '../produtos/produtos.module#ProdutosModule'
              },
              {
                path: 'Clientes',
                loadChildren: '../clientes/clientes.module#ClientesModule'
              },
              {
                path: 'Movimentacao',
                loadChildren: '../movimentacao/movimentacao.module#MovimentacaoModule'
              },
              {
                path: 'Vendas',
                loadChildren: '../vendas/vendas.module#VendasModule'
              },

        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(menuRoutes)
    ],
    providers: [],
    exports: [
        RouterModule,
    ]
})

export class MenuRoutingModule { }
