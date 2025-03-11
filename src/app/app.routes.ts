import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
 

export const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },

    {
        path:'login',
        loadComponent:()=>import('../app/auth/login/login.component').then(m=>m.LoginComponent)    },
    {
        path: 'admin-board',
        loadComponent: () => import("../app/pages/admin-board/admin-board.component").then(m => m.AdminBoardComponent) 

    },
    
    {
        path: 'dashboard',
        loadComponent: () => import("../app/pages/dashboard/dashboard.component").then(m => m.DashboardComponent) 

    },
    { path: '**', redirectTo: 'login' }
];
