import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    NgbModule,
    FormsModule
  ],
  declarations: [CategoriasComponent, CategoriaFormComponent]
})
export class CategoriasModule { }
