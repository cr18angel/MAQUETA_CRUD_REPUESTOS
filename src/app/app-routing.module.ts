import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';


// dominio.com/
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },
  {
    path: 'heroes',
    loadChildren: () => import('./maquinas/maquinas.module').then( m => m.MaquinasModule ),
  },

  {
    path: 'repuestos',
    loadChildren: () => import('./repuestos/repuestos.module').then( m => m.RepuestosModule ),
  },


  {
    path: 'relaciones',
    loadChildren: () => import('./relaciones/relaciones.module').then(m => m.RelacionesModule),
  },




  {
    path: '404',
    component: Error404PageComponent, 
  },

  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: '404',
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
