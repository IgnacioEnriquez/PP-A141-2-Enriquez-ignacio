import { Routes } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'alta-producto', component: AltaProductoComponent },
    { path: '', component: BienvenidaComponent }
];
