import { CategoriasComponent } from './categorias/categorias.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: AdminLayoutComponent,
    path: '',
    children: [
      
      {
        component: HomeComponent,
        pathMatch: 'full',
        path: ''
      },
      {
        loadChildren: './categorias/categorias.module#CategoriasModule',
        path: 'categorias'
      },
      {
        loadChildren: './produtos/produtos.module#ProdutosModule',
        path: 'produtos'
      },
      {
        loadChildren: './usuarios/usuarios.module#UsuariosModule',
        path: 'usuarios'
      }, {
        component: HomeComponent,
        path: '**'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
