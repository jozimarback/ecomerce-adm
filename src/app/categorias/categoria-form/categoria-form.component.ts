import { CategoriaModel } from '../categoria-model';
import { CategoriasService } from '../categorias.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Inativo } from '../../shared/utils/inativo.enum';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styles: []
})
export class CategoriaFormComponent implements OnInit {
  model: CategoriaModel

  mensagemRetorno:string;
  tituloCard = 'Inserir';
  private _success = new Subject<string>();

  staticAlertClosed = false;

  @ViewChild('campoFoco') campoFoco:ElementRef; 

  constructor(private router: Router,
    private rotaAtiva: ActivatedRoute,
    private categoriaService: CategoriasService) {
    this.model = new CategoriaModel();

  }

  ngOnInit() {
    if(this.rotaAtiva.snapshot.params.id){
      this.model = this.rotaAtiva.snapshot.data['categoria'];
      this.tituloCard = 'Editar';
    }
  }
  salvar(form) {
    if (!this.model.id) {
      this.categoriaService.inserir(this.model)
        .subscribe((s) => {
          console.log(s);
          form.resetForm();
          this.mensagemRetorno = "Sucesso ao inserir";

          
          this.campoFoco.nativeElement.focus();
          // setTimeout(() => {this.staticAlertClosed = true; this.mensagemRetorno = null}, 20000);
        })
    } else{
      this.categoriaService.alterar(this.model)
        .subscribe(s => {
          this.router.navigate(["/categorias"])
        })
        
    }
  }
}
