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
