import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriasRoutingModule
  ],
  declarations: [
    CategoriasComponent
  ]
})
export class CategoriasModule { }
