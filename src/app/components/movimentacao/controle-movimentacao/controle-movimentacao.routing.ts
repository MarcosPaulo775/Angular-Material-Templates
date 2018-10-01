import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControleMovimentacaoComponent } from './controle-movimentacao.component';

const ctrlMovimentacaoRoutes: Routes = [

    {
        path: '',
        component: ControleMovimentacaoComponent,
        children: []
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(ctrlMovimentacaoRoutes)
    ],
    providers: [],
    exports: [
        RouterModule,
    ]
})

export class ControleMovimentacaoRoutingModule { }