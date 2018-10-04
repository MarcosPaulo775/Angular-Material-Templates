import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportadorasComponent } from './transportadoras.component';

const transportadorasRoutes: Routes = [

    {
        path: '',
        component: TransportadorasComponent,
        children: []
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(transportadorasRoutes)
    ],
    providers: [],
    exports: [
        RouterModule,
    ]
})

export class TransportadorasRoutingModule { }