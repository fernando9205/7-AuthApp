import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'precio', component: PreciosComponent },
    { path: 'protegida', component: ProtegidaComponent },
    { path: '**', component: HomeComponent },
];


export const appRouting = RouterModule.forRoot(routes);
