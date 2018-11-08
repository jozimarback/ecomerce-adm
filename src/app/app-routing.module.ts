import { CategoriasComponent } from './categorias/categorias.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:''
  },
  {
    loadChildren:'./categorias/categorias.module#CategoriasModule',
    path:'categorias'
  },
  {
    loadChildren:'./produtos/produtos.module#ProdutosModule',
    path:'produtos'
  },
  {
    loadChildren:'./usuarios/usuarios.module#UsuariosModule',
    path:'usuarios'
  },{
    component:HomeComponent,
    path:'**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
