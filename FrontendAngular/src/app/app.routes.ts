import { Routes } from '@angular/router';
import { AddDatosPersonalesComponent } from './add-datos-personales/add-datos-personales.component';
import { ListarDatosPersonalesComponent } from './listar-datos-personales/listar-datos-personales.component';

export const routes: Routes = [
    { 
        path: 'add_page', 
        component: AddDatosPersonalesComponent 
    },
    { 
        path: 'listar_page', 
        component: ListarDatosPersonalesComponent },
    { 
        path: '', 
        redirectTo: 'add_page', 
        pathMatch: 'full' 
    }
];
