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
    this.obterCategorias();
  }
  
  obterCategorias(){
    this.categorias = this.categoriaService.obter();
  }

  excluirCategoria(id){
    this.categoriaService.remover(id)
      .toPromise()
      .then(() => this.obterCategorias());
  }

}
