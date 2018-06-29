import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms'

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
=======

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
>>>>>>> origin/master

@NgModule({
  imports: [
    CommonModule,
<<<<<<< HEAD
    CategoriasRoutingModule,
    FormsModule
  ],
  declarations: [CategoriasComponent, CategoriaFormComponent]
=======
    CategoriasRoutingModule
  ],
  declarations: [
    CategoriasComponent
  ]
>>>>>>> origin/master
})
export class CategoriasModule { }
