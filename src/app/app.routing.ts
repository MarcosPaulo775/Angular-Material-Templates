import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [

    {
        path: 'Menu',
        loadChildren: './components/menu/menu.module#MenuModule'
    },
    {
        path: 'Login',
        loadChildren: './components/login/login.module#LoginModule'
    },
    { path: '', redirectTo: '/Login', pathMatch: 'full' }


]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    exports: [
        RouterModule,
    ]
})

export class AppRoutingModule { }
