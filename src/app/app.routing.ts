import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [

    {
        path: 'Menu',
        loadChildren: './components/menu/menu.module#MenuModule'
    },

    { path: '', redirectTo: '/Menu', pathMatch: 'full' }

]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    exports: [
        RouterModule,
    ]
})

export class AppRoutingModule { }
