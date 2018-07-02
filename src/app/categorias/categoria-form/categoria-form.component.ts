import { CategoriaModel } from './../categoria-model';
import { CategoriasService } from './../categorias.service';
import { Component, OnInit } from '@angular/core';
import { Inativo } from '../../shared/utils/inativo.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styles: []
})
export class CategoriaFormComponent implements OnInit {
  model:CategoriaModel
  constructor(private router:Router,
  private categoriaService:CategoriasService) { 
    this.model = new CategoriaModel();

  }

  ngOnInit() {
    
  }
  salvar() {
    if(this.router.url.indexOf('inserir') > -1){
      this.categoriaService.inserir(this.model)
      .subscribe((s) => {
        console.log(s);

      })
    }
  }
}
