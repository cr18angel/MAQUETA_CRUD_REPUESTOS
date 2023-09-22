
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from '../maquinas/pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { RepuestoPageComponent } from './pages/repuesto-page/repuesto-page.component';

const routes: Routes = [
  {

    // aca tomara la ruta que le coloque en el padre
    path: '',
    // componente que renderice por defecto 
    component: LayoutPageComponent,


    children: [

      { path: 'new-repuesto', component: NewPageComponent },
      { path: 'search', component: SearchPageComponent },
      { path: 'edit/:id', component: NewPageComponent },

      {path: 'byMaquina/:id', component: ListPageComponent},

      { path: 'list', component: ListPageComponent },
      { path: ':id', component: RepuestoPageComponent },
   
      { path: '**', redirectTo: 'list' }


    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RepuestosRoutingModule { }
