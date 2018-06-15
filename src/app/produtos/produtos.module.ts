import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';

@NgModule({
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ],
  declarations: [ProdutosComponent, ProdutoFormComponent]
})
export class ProdutosModule { }
