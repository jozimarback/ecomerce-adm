import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosComponent } from './produtos.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';

const routes: Routes = [
  {
    component: ProdutosComponent,
    path:''
  },
  {
    path:'inserir',
    component:ProdutoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
