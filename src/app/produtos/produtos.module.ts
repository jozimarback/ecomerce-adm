import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DxDataGridComponent, DxDataGridModule, DxNumberBoxModule } from 'devextreme-angular';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DxDataGridModule,
    DxNumberBoxModule,
    ProdutosRoutingModule,
    SharedModule
  ],
  declarations: [ProdutosComponent, ProdutoFormComponent]
})
export class ProdutosModule { }
