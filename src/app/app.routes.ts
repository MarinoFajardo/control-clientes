import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter, withDebugTracing } from '@angular/router';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { LoginComponent } from './componentes/login/login.component';
import { ResgistroComponent } from './componentes/resgistro/resgistro.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { EditarClientesComponent } from './componentes/editar-clientes/editar-clientes.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';

export const routes: Routes = [
    {path: '',component:TableroComponent},
    {path: 'login',component:LoginComponent},
    {path: 'registro',component:ResgistroComponent},
    {path: 'configuracion',component:ConfiguracionComponent},
    {path: 'cliente/editar/:id',component:EditarClientesComponent},
    {path: '**',component:NoEncontradoComponent}

];

export const appConfig:ApplicationConfig = {
    providers:[provideRouter(routes,withDebugTracing())]
}
