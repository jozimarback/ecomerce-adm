import { CategoriasComponent } from './categorias.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaResolver } from './categorias.resolver';

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
    path:'editar/:id',
    component:CategoriaFormComponent,
    resolve:{
      categoria:CategoriaResolver
    }
  },
  {
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
