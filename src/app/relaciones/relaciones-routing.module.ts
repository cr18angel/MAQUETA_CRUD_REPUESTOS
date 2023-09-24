import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from '../maquinas/pages/layout-page/layout-page.component';
import { ListRelacionesComponent } from './pages/list-relaciones/list-relaciones.component';

const routes: Routes = [
{

    // aca tomara la ruta que le coloque en el padre
    path: '',
    // componente que renderice por defecto 
    component: LayoutPageComponent,


  children: [

    {path: 'list/:id', component: ListRelacionesComponent},
    { path: ':id', component: ListRelacionesComponent},


    { path: '**', redirectTo: 'list' }
  ]
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelacionesRoutingModule {}
