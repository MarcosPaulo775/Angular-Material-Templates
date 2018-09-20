import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [

    {
        path: 'Menu',
        loadChildren: './components/menu/menu.module#MenuModule'
    },

    { path: '', redirectTo: '/Menu/Home', pathMatch: 'full' }

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
