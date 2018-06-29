import { CategoriasComponent } from './categorias.component';
<<<<<<< HEAD
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
=======
>>>>>>> origin/master
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
<<<<<<< HEAD
    component:CategoriasComponent,
    
  },
  {
    path:'inserir',
    component:CategoriaFormComponent
  },
  {
    path:'editar/:codigo',
    component:CategoriaFormComponent
=======
    component:CategoriasComponent
  },
  {
    
>>>>>>> origin/master
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
