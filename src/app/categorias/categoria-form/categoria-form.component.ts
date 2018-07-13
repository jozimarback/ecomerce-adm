import { CategoriaModel } from './../categoria-model';
import { CategoriasService } from './../categorias.service';
import { Component, OnInit } from '@angular/core';
import { Inativo } from '../../shared/utils/inativo.enum';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styles: []
})
export class CategoriaFormComponent implements OnInit {
  model: CategoriaModel
  constructor(private router: Router,
    private rotaAtiva: ActivatedRoute,
    private categoriaService: CategoriasService) {
    this.model = new CategoriaModel();

  }

  ngOnInit() {
    if(this.rotaAtiva.snapshot.params.id){
      this.categoriaService.obterId(this.rotaAtiva.snapshot.params.id)
      .toPromise()
      .then(f => this.model = f)
    }
  }
  salvar() {
    if (this.model.id > 0) {
      this.categoriaService.inserir(this.model)
        .subscribe((s) => {
          console.log(s);

        })
    } else{
      this.categoriaService.alterar(this.model)
        .subscribe(s => {
          this.router.navigate(["../"])
        })
        
    }
  }
}
