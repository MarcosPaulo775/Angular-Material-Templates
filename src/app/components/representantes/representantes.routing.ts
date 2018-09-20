import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepresentantesComponent } from './representantes.component';

const representantesRoutes: Routes = [

    {
        path: '',
        component: RepresentantesComponent,
        children: []
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(representantesRoutes)
    ],
    providers: [],
    exports: [
        RouterModule,
    ]
})

export class RepresentantesRoutingModule { }