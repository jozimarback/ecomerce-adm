import { CategoriasComponent } from './categorias.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:CategoriasComponent,
    
  },
  {
    path:'inserir',
    component:CategoriaFormComponent
  },
  {
    path:'editar/:codigo',
    component:CategoriaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
