import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntradaComponent } from './entrada.component';

const entradaRoutes: Routes = [

    {
        path: '',
        component: EntradaComponent,
        children: []
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(entradaRoutes)
    ],
    providers: [],
    exports: [
        RouterModule,
    ]
})

export class EntradaRoutingModule { }