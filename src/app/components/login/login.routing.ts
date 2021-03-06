import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const loginRoutes: Routes = [

    {
        path: '',
        component: LoginComponent,
        children: []
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes)
    ],
    providers: [],
    exports: [
        RouterModule,
    ]
})

export class LoginRoutingModule { }