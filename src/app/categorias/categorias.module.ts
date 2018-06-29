import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    FormsModule
  ],
  declarations: [CategoriasComponent, CategoriaFormComponent]
})
export class CategoriasModule { }
