import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './clientes.component';

const clientesRoutes: Routes = [

    {
        path: '',
        component: ClientesComponent,
        children: []
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(clientesRoutes)
    ],
    providers: [],
    exports: [
        RouterModule,
    ]
})

export class ClientesRoutingModule { }