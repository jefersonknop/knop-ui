import { AuthGuard } from './app/security/auth.guard';
import { LoginComponent } from './app/components/login/login.component';

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { EstadoCrudComponent } from './app/views/estado/crud/estado-crud/estado-crud.component';
import { CidadeCrudComponent } from './app/views/cidade/crud/cidade-crud/cidade-crud.component';
import { InquilinoCrudComponent } from './app/views/inquilino/crud/inquilino-crud/inquilino-crud.component';


import { HomeComponent } from './app/components/home/home/home.component';
import { LinhaCrudComponent } from './app/views/transporte/linha/crud/linha-crud/linha-crud.component';
import { TransportePassageirosComponent } from './app/views/transporte/transporte-passageiros/transporte-passageiros.component';
import { LocalidadeCrudComponent } from './app/views/transporte/localidade/crud/localidade-crud/localidade-crud.component';
import { SecaoCrudComponent } from './app/views/transporte/secao/crud/secao-crud/secao-crud.component';
import { BilhetePassagemComponent } from './app/views/transporte/transporte-passageiros/bilhete-passagem/bilhete-passagem.component';

 
const appRoutes: Routes = [
    { path: '',                          component: HomeComponent,  canActivate: [AuthGuard]},
    { path: 'bilhete-passagem',    component: BilhetePassagemComponent ,  canActivate: [AuthGuard]},     
    { path: 'transporte-passageiros',    component: TransportePassageirosComponent ,  canActivate: [AuthGuard]},   
    { path: 'login',                     component: LoginComponent },    
    { path: 'cidades',                   component: CidadeCrudComponent ,  canActivate: [AuthGuard]},
    { path: 'estados',                   component: EstadoCrudComponent ,  canActivate: [AuthGuard]},
    { path: 'inquilinos',                component: InquilinoCrudComponent,  canActivate: [AuthGuard] },
    { path: 'linhas',                    component: LinhaCrudComponent,  canActivate: [AuthGuard] },
    { path: 'localidades',               component: LocalidadeCrudComponent,  canActivate: [AuthGuard] },
    { path: 'secoes',                    component: SecaoCrudComponent,  canActivate: [AuthGuard] }



 //   { path: 'cadastro-estado/:id',     component: EstadoCreateComponent }
 
];
 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)

