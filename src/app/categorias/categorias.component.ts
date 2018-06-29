<<<<<<< HEAD
import { CategoriasService } from './categorias.service';
=======
>>>>>>> origin/master
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styles: []
})
export class CategoriasComponent implements OnInit {
<<<<<<< HEAD
  categorias;
  constructor(private categoriaService:CategoriasService) { }

  ngOnInit() {
    this.categorias = this.categoriaService.obter();
  }



=======

  constructor() { }

  ngOnInit() {
  }

>>>>>>> origin/master
}
