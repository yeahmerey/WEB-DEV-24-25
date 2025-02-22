import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : '', 
        loadComponent : () => {
            return import('./home/home.component').then((m) => m.HomeComponent)
        }, 
    },
    {
        path : 'category/laptops',
        loadComponent : () => {
            return import('./category/laptops/laptops.component').then((m)=>m.LaptopsComponent)
        }
    }
];

