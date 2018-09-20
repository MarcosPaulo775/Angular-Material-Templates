import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const homeRoutes: Routes = [

    {
        path: '',
        component: HomeComponent,
        children: []
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    providers: [],
    exports: [
        RouterModule,
    ]
})

export class HomeRoutingModule { }
