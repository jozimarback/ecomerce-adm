import { CategoriasService } from './categorias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styles: []
})
export class CategoriasComponent implements OnInit {
  categorias;
  constructor(private categoriaService:CategoriasService) { }

  ngOnInit() {
    this.categorias = this.categoriaService.obter();
  }

}
