import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaidaComponent } from './saida.component';

const saidaRoutes: Routes = [

    {
        path: '',
        component: SaidaComponent,
        children: []
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(saidaRoutes)
    ],
    providers: [],
    exports: [
        RouterModule,
    ]
})

export class SaidaRoutingModule { }